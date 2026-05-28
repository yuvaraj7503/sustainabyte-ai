import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: any = {};
    let attachments: any[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      data.type = formData.get("type");
      data.name = formData.get("name");
      data.email = formData.get("email");
      data.organization = formData.get("organization") || "";
      data.position = formData.get("position") || "";
      data.experience = formData.get("experience") || "";
      data.mobile = formData.get("mobile") || "";
      data.linkedin = formData.get("linkedin") || "";
      data.message = formData.get("message") || "";

      const file = formData.get("resume") as File;
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type
        });
      }
    } else {
      data = await req.json();
    }

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "New Form Submission - Sustainabyte";
    let html = "";

    if (data.type === "contact") {
      subject = "New Contact Inquiry - Sustainabyte";
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D1B3E;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization}</p>
          <p><strong>Mobile:</strong> ${data.mobile || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message}</div>
        </div>
      `;
    } else if (data.type === "career") {
      subject = `Job Application: ${data.position} - ${data.name}`;
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D1B3E;">New Job Application</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile || "N/A"}</p>
          <p><strong>Position:</strong> ${data.position}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
          <p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>
          <p><strong>Message/Cover Letter:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message || "No message provided."}</div>
        </div>
      `;
    }

    const mailOptions = {
      from: `"Sustainabyte Forms" <${process.env.EMAIL_USER}>`,
      to: "yuvaraj.p@sustainabyte.ai",
      subject: subject,
      html: html,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully"
    }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to process request: " + error.message }, { status: 500 });
  }
}
