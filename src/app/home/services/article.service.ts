import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable() // since this is a feature module service, we provide it only when the module is loaded (look at home.module.ts file)
export class ArticleService {

  private articles: Article[] = [
    {
      id: 1,
      title: "Les meilleurs placement financiers en période d'inflation.",
      author: "Jimmy Neutron",
      publishedDate: "2022-12-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgUrl: "https://misterprepa.net/wp-content/uploads/2022/01/Inflation-2.jpg"
    },
    {
      id: 2,
      title: "Gérer mon budget facilement.",
      author: "Daffy Duck",
      publishedDate: "2022-12-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgUrl: "https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2020/10/Costing-Scoping-Reporting-Introducing-Budget-Management-for-Professional-Services-1.jpg"
    },
    {
      id: 3,
      title: "Ce qu'il y a de nouveaux dans votre banque.",
      author: "Bruce Wayne",
      publishedDate: "2022-12-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgUrl: "https://media.istockphoto.com/id/1331058734/vector/male-hand-holding-megaphone-with-important-announcement-speech-bubble-loudspeaker-banner-for.jpg?s=612x612&w=0&k=20&c=H08-IbZBXoz355CDUZhI8ajI6G05ytNNWaXVvErxe1Q="
    }
  ]

  constructor() {}

  getArticles(): Observable<Article[]>{
    return of(this.articles);
  }
}
