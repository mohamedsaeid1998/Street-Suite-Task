export interface IFilterData {
  name: string
  marketCap: number
  marketIndex: string
  risk: string
}

export interface IFilterResponse {
  asset: string
  market: string
  risk:string
  strategy: string
  industry?:string[]
}