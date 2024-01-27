import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',

})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';
  public hasLoaded : boolean = false;
  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required.');
  }
  onLoad(){
    setTimeout(() => {// esto es solo para visualizar el laoding
      this.hasLoaded = true
    },100);

  }
}
