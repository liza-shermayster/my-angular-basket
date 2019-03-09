import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    const savedMenu = window.sessionStorage.getItem("menu");
    if (savedMenu) {
      console.log('from storage');

      this.menu = JSON.parse(savedMenu);
      return;
    }
    this.menuService.getMenuData()
      .subscribe(
        res => {
          debugger;
          console.log('from service');
          this.menu = res;
          window.sessionStorage.setItem("menu", JSON.stringify(res));
        }
      )
  }
  addItemToBasket(menuItemKey, amount) {
    console.log(menuItemKey, ":", amount);
  }

}
