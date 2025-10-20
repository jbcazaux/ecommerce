export type Universe = 'men' | 'women' | 'kids' | 'unisex'
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type Category = 'sportswear' | 'outwear' | 'business' | 'casual'

export interface Tshirt {
  id: string
  name: string
  universe: Universe
  category: Category
  price: number
  description: string
  size: Size
  stock: number
  image: string
  brand: string
}
