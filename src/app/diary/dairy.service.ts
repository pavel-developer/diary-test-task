import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface Card {
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  cards: Card[] = [];

  public cardAdded$ = new BehaviorSubject(this.cards);

  constructor() {
  }

  addCard(card: Card): void {
    this.cards.push(card);
    this.cardAdded$.next(this.cards);
  }
}
