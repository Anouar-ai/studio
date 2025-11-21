'use server'
import sharp from 'sharp'

function bufferToBase64(buffer: Buffer): string {
  // Sharp can output to base64 directly, but this is a safeguard
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getFileBufferRemote(url: string): Promise<Buffer> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export async function getPlaceholderImage(filepath: string): Promise<string> {
  try {
    const originalBuffer = await getFileBufferRemote(filepath)
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer()
    return bufferToBase64(resizedBuffer)
  } catch {
    // Return a transparent 1x1 pixel as a fallback
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
  }
}
