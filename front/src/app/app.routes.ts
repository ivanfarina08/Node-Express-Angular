import { Routes } from '@angular/router';
import { AlunoListaComponent } from './aluno/aluno-lista/aluno-lista.component';
import { AlunoFormularioComponent } from './aluno/aluno-formulario/aluno-formulario.component';
import { ProfessorListaComponent } from './professor/professor-lista/professor-lista.component';
import { ProfessorFormularioComponent } from './professor/professor-formulario/professor-formulario.component';
import { CursoListaComponent } from './curso/curso-lista/curso-lista.component';
import { CursoFormularioComponent } from './curso/curso-formulario/curso-formulario.component';
import { AvaliacaoListaComponent } from './avaliacao/avaliacao-lista/avaliacao-lista.component';
import { AvaliacaoFormularioComponent } from './avaliacao/avaliacao-formulario/avaliacao-formulario.component';

export const routes: Routes = [
    { path: 'aluno-lista', component: AlunoListaComponent },
    { path: 'aluno-fomulario', component: AlunoFormularioComponent },
    { path: 'professor-lista', component: ProfessorListaComponent },
    { path: 'professor-fomulario', component: ProfessorFormularioComponent },
    { path: 'curso-lista', component: CursoListaComponent },
    { path: 'curso-fomulario', component: CursoFormularioComponent },
    { path: 'avaliacao-lista', component: AvaliacaoListaComponent },
    { path: 'avaliacao-fomulario', component: AvaliacaoFormularioComponent },
];
