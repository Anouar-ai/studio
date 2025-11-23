
import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    if (!process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64) {
        throw new Error("Google service account credentials are not set in environment variables.");
    }

    // Decode the Base64 service account key
    const decodedKey = Buffer.from(process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8');
    const credentials = JSON.parse(decodedKey);

    const jwtClient = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ['https://www.googleapis.com/auth/indexing'], // The required scope
      undefined
    );

    const tokens = await jwtClient.authorize();

    const options = {
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.access_token}`,
      },
      data: {
        url: url,
        type: 'URL_UPDATED',
      },
    };

    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: JSON.stringify(options.data),
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Indexing Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}
