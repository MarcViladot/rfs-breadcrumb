import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface BreadcrumbItem {
  url: string;
  text: string;
}

@Component({
  selector: 'rfs-breadcrumb',
  template: `
    <div class="row" *ngIf="breadcrumbItems.length > 0">
      <span *ngFor="let item of breadcrumbItems; let i = index">
        <span [routerLink]="[item.url]" [ngClass]="(!currentUrl(item.url)?'active':'disabled')">{{item.text}}</span>
        <span>{{i === breadcrumbItems.length - 1 ? '' : ' > '}}&nbsp;</span>
      </span>
    </div>
  `,
  styles: [`
    .active {
      cursor: pointer;
      color: #3F51B5;
      font-weight: normal;
    }

    .disabled {
      cursor: default;
      color: #9E9E9E;
      font-weight: normal;
    }

    .active:focus {
      outline: 0;
    }

    .disabled:focus {
      outline: 0;
    }
  `]
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbItems: BreadcrumbItem[] = [];

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setBreadcrumbs();
    });
  }

  ngOnInit() {
  }

  setBreadcrumbs(): void {
    this.breadcrumbItems = [];
    const routes = this.router.url.split('/');
    for (let i = 0; i < routes.length; i++) {
      if (routes[i] === '' && i === 0) {
        this.breadcrumbItems.push({url: '/', text: 'Home'});
      } else if (routes[i] !== '' && i > 0) {
        let url = '';
        if (i > 1) {
          url += this.breadcrumbItems[i - 1].url;
        }
        const currentUrl = routes[i];
        this.breadcrumbItems.push({url: url + '/' + currentUrl, text: currentUrl});
      }
    }

  }

  currentUrl(url: string): boolean {
    return url === this.router.url;
  }

}
