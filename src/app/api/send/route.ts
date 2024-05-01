import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {

    const { from, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: `${from} ${email} via <onboarding@resend.dev>`,
      to: 'loganallendev@gmail.com',
      subject: subject,
      text: message,
      react: '',
    });
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

