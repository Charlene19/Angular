import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogOC';
  cetDate = new Date();
  posts = [
    {title: 'test', content: 'contenu', loveIts: 0, created_at: this.cetDate},
  {title: 'deu', content: 'cont2', loveIts: 0, created_at: this.cetDate},
  {title: 'troi', content: 'cont3', loveIts: 0, created_at: this.cetDate},
  ];

}
