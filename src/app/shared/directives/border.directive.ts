import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AccountType } from '../enums/account-type.enum';

@Directive({
  selector: '[border]'
})
export class BorderDirective implements AfterViewInit {

  @Input()
  accountType: any = AccountType.CURRENT_ACCOUNT;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setBackgroundColor(this.accountType);
  }

  private setBackgroundColor(accountType: AccountType) {
    let color = this.determineColor(accountType);

    this.renderer.setStyle(this.el.nativeElement, 'border', `3px solid ${color}`);
  }

  private determineColor(accountType: AccountType): string{
      switch(accountType){
          case AccountType.CURRENT_ACCOUNT:
              return "#00A4BD";
          case AccountType.SAVING_ACCOUNT:
              return "#E91E63";
          default:
              return "white";
      }
  }

}