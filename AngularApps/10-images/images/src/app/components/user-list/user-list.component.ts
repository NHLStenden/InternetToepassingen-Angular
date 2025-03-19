import {Component, inject} from '@angular/core';
import {WebsiteUser} from '../../classes/websiteUser';
import {CreateAvatarSourceURLPipe} from '../../pipes/create-avatar-source-url.pipe';
import {RouterLink} from '@angular/router';
import {DataSingletonService} from '../../services/data-singleton.service';

@Component({
  selector: 'user-list',
  imports: [
    CreateAvatarSourceURLPipe,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  data: DataSingletonService;

  constructor() {
    this.data = inject(DataSingletonService);
  }}
