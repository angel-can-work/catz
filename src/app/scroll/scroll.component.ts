import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  @Input() enableScrollToTop: boolean = true;
  @Input() enableScrollToBottom: boolean = true;

  private scrollId: number = 0;

  startScroll = (e: any) => {
    if (!!e.target.checked) {
      const id = setInterval(() => {
        window.scrollBy(0, 1);
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          this.stopScroll(id);
        }
      }, 10) as unknown as number;

      this.scrollId = id;
    } else {
      this.stopScroll(this.scrollId);
    }
  };

  stopScroll(id: number): void {
    clearInterval(id);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scrollTo(0, window.document.body.scrollHeight - window.innerHeight);
  }
}
