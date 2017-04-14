import { HeroMatPage } from './app.po';

describe('hero-mat App', () => {
  let page: HeroMatPage;

  beforeEach(() => {
    page = new HeroMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
