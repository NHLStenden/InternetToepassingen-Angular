import { CreateAvatarSourceURLPipe } from './create-avatar-source-url.pipe';

describe('CreateAvatarSourceURLPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateAvatarSourceURLPipe();
    expect(pipe).toBeTruthy();
  });
});
