export type Sex = 'kid' | 'male' | 'female'
export type Category = 'sportswear' | 'outwear' | 'business'

export interface Shoes {
  id: string
  name: string
  sex: Sex
  category: Category
  price: number
  description: string
  size: number
  stock: number
  image: string
}
