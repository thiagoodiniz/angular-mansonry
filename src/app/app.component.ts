import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-masonry';

  constructor(){}

  ngOnInit(){
  }

  ngAfterViewChecked() {
    this.resizeAllGridItems();
  }

  ngAfterViewInit(){
      this.resizeAllGridItems();
  }

  resizeGridItem(item){
    const grid = document.getElementsByClassName("grid")[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeAllGridItems(){
    const allItems = document.getElementsByClassName("item");
    for(let x=0;x<allItems.length;x++){
      this.resizeGridItem(allItems[x]);
    }
  }

  resizeInstance(instance){
    const item = instance.elements[0];
    this.resizeGridItem(item);
  }

}
