import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];

    this.route
    .paramMap
    .subscribe(res => this.userId = res.get('id'));    
  }
}
