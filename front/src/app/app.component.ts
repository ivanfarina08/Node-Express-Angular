import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoListaComponent } from "./aluno/aluno-lista/aluno-lista.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AlunoListaComponent]
})
export class AppComponent {
  title = 'front';
}
