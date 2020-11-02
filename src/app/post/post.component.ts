
export class PostComponent {

  title: string;
  content: string;
  loveIts: number;
  createdat: Date;

  constructor(title: string,  content: string,  loveIts: number, createdat: Date) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdat = createdat;
  }


}
