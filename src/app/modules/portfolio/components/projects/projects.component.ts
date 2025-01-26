import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt : 'Projeto 1',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links : [
        {
          name : 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
  ])
}
