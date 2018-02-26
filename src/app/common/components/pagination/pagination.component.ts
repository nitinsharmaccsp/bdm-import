import { Component, OnInit, Input,
    Output,
    EventEmitter, TrackByFn } from '@angular/core';
    
@Component({
  selector: 'paginationComponent',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Input() itemlength:number;
    @Input() maxLimit:number;
    @Output() pageClicked : EventEmitter<any> = new EventEmitter<any>(); 
    private val: string;
    public selected;
    constructor(
    ) {}
    
      public count:number=1;
   createRange(){
      var items: number[] = [];
      for(var i = 1; i <= this.count; i++){
         items.push(i);
      }
      return items;
    }
    public ngOnInit() {
      console.log(this.itemlength+ this.maxLimit);
     this.count=this.itemlength/this.maxLimit;
     if(this.itemlength%this.maxLimit!=0){
        this.count=this.count+1;
     }
      console.log(this.count);
    }
    private minCount:number;
    private maxcount:number;
    public onChangePage(ev,item){
      var id=ev.srcElement.id;
      //jQuery('#'+id).addClass('active');
      this.minCount=(id*this.maxLimit)-this.maxLimit;
      this.maxcount=(id*this.maxLimit)-1;
      if(this.maxcount>this.itemlength){
        this.maxcount=this.itemlength-1;
      }
      this.pageClicked.emit({"minCount":this.minCount,
                      "maxCount":this.maxcount});
    }
    isActive(item) {
      return this.selected === item;
  };
  }
  
  
  
