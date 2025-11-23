
import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: NextRequest) {
  try {
    // 1. Get the URL to index from the request body
    const body = await req.json()
    const { url } = body

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // 2. Prepare Authentication
    // We replace literal \n characters to handle Vercel/Env variable formatting issues
    const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const clientEmail = process.env.GOOGLE_INDEXING_CLIENT_EMAIL

    const jwtClient = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey,
      ['https://www.googleapis.com/auth/indexing'], // The required scope
      undefined
    )

    const tokens = await jwtClient.authorize()

    // 3. Call the Indexing API
    const options = {
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.access_token}`,
      },
      data: {
        url: url,
        type: 'URL_UPDATED', // Use 'URL_DELETED' if removing a page
      },
    }

    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: JSON.stringify(options.data),
    })

    const result = await response.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Indexing Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
