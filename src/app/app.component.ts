import { AuthService } from './login/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient){

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        return this.mostrarMenu = mostrar;
      }
    )
    
  }

}
