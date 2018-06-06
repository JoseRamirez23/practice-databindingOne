import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  heading:string ="Person Details";

  person: any = {

    name:{

      first:'Jose',
      last:'Noris'
    },
    gender:'male',
    address:'You know'
  };

  getInitial(){

    if(this.person.gender === 'male'){

      return'Mr.';
    }else if(this.person.gender ==='female'){
      return 'Mrs.';
    }else{
      return '';
    }
  }

  getAddress(){

    if(this.person.address){

    }
  }
  


}
