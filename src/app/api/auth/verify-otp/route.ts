import { NextRequest, NextResponse } from 'next/server';

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID!;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN!;
const TWILIO_VERIFY_SID = process.env.TWILIO_VERIFY_SERVICE_SID!;

export async function POST(req: NextRequest) {
  const { phone, code } = await req.json();

  if (!phone || !code) {
    return NextResponse.json({ error: 'Phone and code are required' }, { status: 400 });
  }

  const credentials = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');

  const res = await fetch(
    `https://verify.twilio.com/v2/Services/${TWILIO_VERIFY_SID}/VerificationCheck`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ To: phone, Code: code }),
    }
  );

  const body = await res.json().catch(() => ({}));

  if (!res.ok || body.status !== 'approved') {
    return NextResponse.json(
      { error: 'Invalid or expired verification code' },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
