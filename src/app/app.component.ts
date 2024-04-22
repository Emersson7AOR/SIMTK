import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { HomeComponent } from "./componentes/home/home.component";
import { FooterComponent } from "./componentes/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'SIMTK';
}
