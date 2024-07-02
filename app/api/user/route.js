import { NextResponse } from "next/server";

export const GET = () => {
  const user = { name: "John Michael", email: "mail@mail.com", website: "michaeljohn.com" };
  return new NextResponse(JSON.stringify(user));
}
