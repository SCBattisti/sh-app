import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  openLinkInSystemBrowser(url: string) {
    window.open(url, '_system', 'location=yes')
  }

}
