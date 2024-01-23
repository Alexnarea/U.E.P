import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./components/head/head.component";
import { OpcionComponent } from './components/opcion/opcion.component';
import { NoticeComponent } from './components/notice/notice.component';
import { InformationComponent } from './components/information/information.component';
import { FootComponent } from './components/foot/foot.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,HeadComponent,OpcionComponent,NoticeComponent,InformationComponent,FootComponent]
})
export class AppComponent {
  title = 'tail';
}
