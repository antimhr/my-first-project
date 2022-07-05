import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data = 0;
  
  users=[
    {name: 'Antim', email: 'antim@gmail.com', age:20},
    {name: 'Antim 2', email: 'antim2@gmail.com', age:23},
    {name: 'Antim 3', email: 'antim3@gmail.com', age:24},
    {name: 'Antim 4', email: 'antim4@gmail.com', age:25},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  //sending data to child
  updateChild(){
    this.data = Math.floor(Math.random()*10)
  }


  title = 'pass data, child to parent Component';
  text="";

  //getting data from child
  updateData(item:string)
  {
    console.log(item)
    this.text=item;
  }

}
