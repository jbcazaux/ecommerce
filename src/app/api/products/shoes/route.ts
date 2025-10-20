import { NextResponse } from 'next/server'

import shoesData from '@/data/products/shoes.json'

export async function GET() {
  return NextResponse.json(shoesData)
}
