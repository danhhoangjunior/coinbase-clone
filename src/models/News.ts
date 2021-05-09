export default class News {
  id: number;
  newsOutlet: string;
  date: string;
  title: string;
  image: string;

  constructor(
    id: number,
    newsOutlet: string,
    date: string,
    title: string,
    image: string
  ) {
    this.id = id;
    this.newsOutlet = newsOutlet;
    this.date = date;
    this.title = title;
    this.image = image;
  }
}
