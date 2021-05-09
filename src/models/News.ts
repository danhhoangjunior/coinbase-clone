export default class News {
  newsOutlet: string;
  date: string;
  title: string;
  image: string;
  url: string;

  constructor(
    newsOutlet: string,
    date: string,
    title: string,
    image: string,
    url: string
  ) {
    this.newsOutlet = newsOutlet;
    this.date = date;
    this.title = title;
    this.image = image;
    this.url = url;
  }
}
