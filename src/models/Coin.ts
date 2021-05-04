export default class Coin {
  name: string;
  symbol: string;
  price: number;
  percentChange: number;

  constructor(
    name: string,
    symbol: string,
    price: number,
    percentChange: number
  ) {
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.percentChange = percentChange;
  }
}
