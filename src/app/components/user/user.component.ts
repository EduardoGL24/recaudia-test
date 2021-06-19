import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userInfo: any = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let conditions = {
      "conditions": {
        "person_id": this.route.snapshot.params['userId']
      }
    }
    this.apiService.getUsers(conditions).subscribe((data: any) => {
      this.userInfo = data.results[0];
      console.log(this.userInfo)
    });
  }

}
