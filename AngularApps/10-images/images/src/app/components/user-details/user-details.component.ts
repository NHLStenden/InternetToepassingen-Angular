import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Username, WebsiteUser} from '../../classes/websiteUser';
import {DataSingletonService} from '../../services/data-singleton.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  user: WebsiteUser | undefined;

  constructor() {
    const route = inject(ActivatedRoute);
    const data = inject(DataSingletonService);
    const id: Username = route.snapshot.params['id'] as Username; // username!

    this.user = data.getUser(id);
  }
}
