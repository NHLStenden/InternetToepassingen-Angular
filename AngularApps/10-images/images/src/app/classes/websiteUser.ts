export type Username = string;
export type AvatarUrl = string;

export class WebsiteUser {
  username: Username;
  avatar: AvatarUrl;
  name: string;

  constructor(username: string, avatar: string, name: string) {
    this.username = username;
    this.avatar = avatar;
    this.name = name;
  }
}
