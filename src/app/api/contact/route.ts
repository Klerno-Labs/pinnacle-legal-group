import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot check for spam prevention
    if (_gotcha) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // In a real environment, you would send an email here using Nodemailer, SendGrid, or Resend
    console.log("Form Submission Received:", { name, email, phone, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}