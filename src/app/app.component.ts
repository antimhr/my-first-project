import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  servers=[];

  onAddServer(){
    this.servers.push('Another Server')
  }

  // onRemoveServer(){
  //   // this will remove last item
  //   this.servers.pop()
  // }

  onRemoveServer(id: number){
    console.log(id)
    this.servers.splice(this.servers[id], 1)
  }
}
