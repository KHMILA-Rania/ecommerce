import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Client} from 'src/app/interfaces/clientInterface';

import {clientService} from 'src/app/services/clientService';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
 
  client: Client={
    "name":'',
    "adress":'',
    "email":'',
    "phone": 0,
    "password":''
  }

  constructor(private route:ActivatedRoute, private cs:clientService){
    this.cs.getClient();
  }
}
