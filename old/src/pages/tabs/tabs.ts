import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ReviewPage } from '../review/review';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReviewPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
