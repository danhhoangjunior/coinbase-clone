export default class Coin {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percentChange: number;

  constructor(
    id: number,
    name: string,
    symbol: string,
    price: number,
    percentChange: number
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.percentChange = percentChange;
  }
}
