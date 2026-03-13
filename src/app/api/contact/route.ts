import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot validation
    if (_gotcha) {
      return NextResponse.json({ success: false }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real application, you would send an email here using Nodemailer, SendGrid, or Resend.
    // For this demo, we will simulate a successful response.
    // console.log("Form submission received:", { name, email, phone, service, message });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}