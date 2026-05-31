"use server";

import { Resend } from "resend";
import { contactSchema } from "@/schemas/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(
  prevState: { message: string },
  formData: FormData,
) {
  try {
    const result = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    if (!result.success) {
      return {
        message: "error: Invalid form data",
        timestamp: Date.now(),
      };
    }

    const { name, email, message } = result.data;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["pouriav95@gmail.com"],
      subject: `New Message From ${name}`,
      html: `
        <h2>Message Info:</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return {
      message: "ok",
      timestamp: Date.now(),
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    return {
      message: `error: ${message}`,
      timestamp: Date.now(),
    };
  }
}
