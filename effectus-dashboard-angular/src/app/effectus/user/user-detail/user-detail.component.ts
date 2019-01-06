import{Component, OnInit}from '@angular/core';

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { User } from '../entity/user.entity';
import { ActivatedRoute } from '@angular/router';
import { UserGQL } from '../query/user.query';

@Component({
selector: 'app-user-detail',
templateUrl: './user-detail.component.html',
styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: Observable<User>;

  constructor(private userGQL: UserGQL, private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.paramMap.pipe(
      switchMap(params => {
        const key = params.get("key");
        return this.userGQL
          .watch({ key: key })
          .valueChanges.pipe(map(result => result.data.user));
      })
    );
  }

}
