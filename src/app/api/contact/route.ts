import { NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);

    // In a real application, you would send an email here using a service like Resend, SendGrid, or Nodemailer.
    // Example:
    // await sendEmail({
    //   to: "info@pinnaclelegalgroup.com",
    //   subject: `New Contact Form Submission from ${validatedData.name}`,
    //   body: validatedData.message,
    // });

    console.log("Form submission received:", validatedData);

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}