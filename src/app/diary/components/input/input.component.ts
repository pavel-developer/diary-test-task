import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {Card, DairyService} from '../../dairy.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  emojiVisible = false;
  currentIcon = 'smile';
  text = '';
  readonly iconSubject$ = new Subject<string>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dairyService: DairyService
  ) {
    this.matIconRegistry.addSvgIcon('arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/arrow.svg'));
    this.matIconRegistry.addSvgIcon('smile', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/smile.svg'));
    this.matIconRegistry.addSvgIcon('keyboard', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/keyboard.svg'));
    this.iconSubject$.subscribe({
      next: (): void => {
        this.emojiVisible ? this.currentIcon = 'keyboard' : this.currentIcon = 'smile';
      }
    });
  }

  toggleEmoji(): void {
    this.emojiVisible = !this.emojiVisible;
    this.iconSubject$.next();
  }

  addEmoji(event): void {
    this.text = `${this.text}${event.emoji.native}`;
  }

  save(): void {
    const newCard: Card = {
      content: this.text,
      timestamp: new Date()
    };
    this.dairyService.addCard(newCard);
  }

}
