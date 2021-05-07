export default class Coin {
  id: number;
  name: string;
  symbol: string;
  price: string;
  percentChange: string;

  constructor(
    id: number,
    name: string,
    symbol: string,
    price: string,
    percentChange: string
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.percentChange = percentChange;
  }
}
