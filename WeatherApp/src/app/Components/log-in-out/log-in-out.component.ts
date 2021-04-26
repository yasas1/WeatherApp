import { Component, OnInit, Inject  } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.component.html',
  styleUrls: ['./log-in-out.component.scss']
})
export class LogInOutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

  logIn(): void {
    this.auth.loginWithRedirect();
  }

  logOut(): void {
    this.auth.logout({ returnTo: document.location.origin })
  }

}
