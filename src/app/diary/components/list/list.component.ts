import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Card, DairyService} from '../../dairy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  cards: Card[];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dairyService: DairyService
  ) {
    this.matIconRegistry.addSvgIcon('calendar', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/calendar.svg'));
    this.matIconRegistry.addSvgIcon('more', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/more.svg'));
    this.dairyService.cardAdded$.subscribe(cards => {
      this.cards = cards;
    });
  }
}
