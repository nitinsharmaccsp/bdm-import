import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
@Input() tabs:Array<any> = [];
  constructor() { }
  public classChanged:boolean=false;
  ngOnInit() {
    console.log(this.tabs);
  }
  toggleClass(event){
    this.classChanged=!this.classChanged;
  }
  activateLink(item : any) {
    var index = this.tabs.indexOf(item);
    this.tabs[index].active = true; 
    for(let i = 0 ; i < this.tabs.length ; i++) {
      if(i!=index) this.tabs[i].active = false;
    }
  }
  
}
