import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company } = body;

  if (!name || !email || !company) {
    return NextResponse.json(
      { success: false, message: "Name, work email, and company are required." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — your enquiry has been received.",
    data: { name, email, company },
  });
}
