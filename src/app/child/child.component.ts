import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() item = 0; 
  @Input() item2:{name:string, email:string, age:number} = {name:'', email:'', age:0};
  @Output() updateDataEvent= new EventEmitter<string>(); 

  
  constructor() { }

  ngOnInit(): void {
  } 

}
