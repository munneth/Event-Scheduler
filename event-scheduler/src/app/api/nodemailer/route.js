import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "austyn.vandervort28@ethereal.email",
    pass: "6NAthWtV6n5zerfKkn",
  },
});

export async function POST(request) {
  const { name, email, message } = await request.json();

  const info = await transporter.sendMail({
    from: '"Austyn Vandervort" <austyn.vandervort28@ethereal.email>',
    to: "munnethgill@gmail.com",
    subject: "CONTACT FORM SUBMISSION",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain‑text body
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `, // HTML body
  });

  console.log("Message sent:", info.messageId);

  return new Response("", {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
