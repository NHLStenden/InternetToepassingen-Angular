import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../environments/environment';
import {AvatarUrl} from '../classes/websiteUser';

@Pipe({
  name: 'createAvatarSourceURL'
})
export class CreateAvatarSourceURLPipe implements PipeTransform {

  transform(value: AvatarUrl): string {
    return environment.AVATAR_URL_FOLDER + value;
  }

}
