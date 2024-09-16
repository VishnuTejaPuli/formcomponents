import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit{


  title: string = 'from parent';
  ngOnInit(): void {
    console.log('Init called from .....parent');
  }
  ngAfterContentInit(): void {
    console.log('constructor() is called from ....parent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() is called....from parent");
  }
  
     ngDoCheck(): void {
      console.log("ngDoCheck() is called.... from parent");
     }
     keyCapture(event: any){
      this.title = event;
  }

  // sendMessage(){
  //     console.log("Message is sent");
  // }



  
}

 
