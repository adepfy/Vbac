import 'server-only';
import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from 'mysql2/promise';

// เชื่อมต่อฐานข้อมูล MySQL เดิมของระบบ VBAC (admin_vbacacth_db)
// ตั้งค่าใน .env.local — ดูตัวอย่างที่ .env.example

declare global {
  // eslint-disable-next-line no-var
  var __vbacPool: Pool | undefined;
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.DB_HOST && process.env.DB_NAME && process.env.DB_USER);
}

function getPool(): Pool {
  if (!global.__vbacPool) {
    global.__vbacPool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8mb4',
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    });
  }
  return global.__vbacPool;
}

/** รันคำสั่ง SELECT แบบ parameterized (กัน SQL injection) */
export async function query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  const [rows] = await getPool().query<RowDataPacket[]>(sql, params);
  return rows as unknown as T[];
}

/** รันคำสั่ง INSERT/UPDATE แบบ parameterized */
export async function execute(sql: string, params: unknown[] = []): Promise<ResultSetHeader> {
  const [res] = await getPool().execute<ResultSetHeader>(sql, params as (string | number | null)[]);
  return res;
}
