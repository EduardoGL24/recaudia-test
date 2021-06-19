import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  
  users: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let conditions = {
      "conditions": {},
       "page_number": this.users.page,
       "number_entries": 12
    }
    this.apiService.getUsers(conditions).subscribe((data: any) => {
      this.users = data;
    });
  }

  pagination(){
    let conditions = {
      "conditions": {},
       "page_number": this.users.page,
       "number_entries": 12
    }
    this.apiService.getUsers(conditions).subscribe((data: any) => {
      this.users = data;
    });
  }

}
