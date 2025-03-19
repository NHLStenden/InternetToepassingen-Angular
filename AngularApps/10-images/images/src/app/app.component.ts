import {Component, inject} from '@angular/core';
import {UserListComponent} from './components/user-list/user-list.component';
import {WebsiteUser} from './classes/websiteUser';
import {DataSingletonService} from './services/data-singleton.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    UserListComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'images';

}
