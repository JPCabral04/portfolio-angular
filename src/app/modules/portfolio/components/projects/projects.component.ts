import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  private dialog = inject(MatDialog);

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

  public openDialog(data: IProjects){
    this.dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
