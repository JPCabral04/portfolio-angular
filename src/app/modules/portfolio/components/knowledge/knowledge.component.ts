import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src : 'assets/icons/html.svg',
      alt : 'Ícone de conhecimento de html'
    },
    {
      src : 'assets/icons/html.svg',
      alt : 'Ícone de conhecimento de html'
    },
    {
      src : 'assets/icons/html.svg',
      alt : 'Ícone de conhecimento de html'
    },
    {
      src : 'assets/icons/html.svg',
      alt : 'Ícone de conhecimento de html'
    },
    {
      src : 'assets/icons/html.svg',
      alt : 'Ícone de conhecimento de html'
    }
  ])
}
