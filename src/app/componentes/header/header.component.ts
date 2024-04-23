import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterOutlet, FooterComponent]
})
export class HeaderComponent {

  //Inyeccion del Router.
  router = inject(Router);

  //Funcion que te llevara al componente de videos.
  irVideos() {
    this.router.navigate(['videos'])
  }

  videos = 'videos'




}
