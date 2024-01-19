import { NextResponse } from "next/server";
import { pool } from "./pool-db";

export async function POST(req: Request, res: NextResponse) {
  try {
    const { name, email, cellphone } = await req.json();
    const connection = await pool.getConnection();
    const result = await connection.query(
      "INSERT INTO form_infos (name, email, cellphone) VALUES (?, ?, ?)",
      [name, email, cellphone]
    );
    connection.release();
    return NextResponse.json(
      { message: "Enviado com sucesso!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
