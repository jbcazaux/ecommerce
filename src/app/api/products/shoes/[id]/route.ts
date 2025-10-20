import { NextResponse } from 'next/server'

import shoesData from '@/data/products/shoes.json'
import type { Shoes } from '@/domain/products/Shoes'

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params

  const allShoes: ReadonlyArray<Shoes> = shoesData as ReadonlyArray<Shoes>
  const shoes = allShoes.find((s: Shoes) => s.id === id)

  if (!shoes) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(shoes)
}
