import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService){

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        return this.mostrarMenu = mostrar;
      }
    )
    
  }

}
