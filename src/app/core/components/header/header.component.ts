import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged$!: Observable<boolean>; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initObservables();
  }

  logout(): void{
    this.authService.logout();
  }

  private initObservables(): void{
    this.logged$ = this.authService.logged$;
  }

}
