import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from 'src/app/core/servises/http-base.service';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private http: HttpBaseService
  ) { }

  ngOnInit(): void {
    this.getUser(1).subscribe(user => this.user = user);
  }

  getUser(id: number): Observable<User> {
    return this.http.getRequest<User>(`user/${id}`);
  }

}
