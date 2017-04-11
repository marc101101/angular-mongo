import { AngularHeroPage } from './app.po';

describe('angular-hero App', () => {
  let page: AngularHeroPage;

  beforeEach(() => {
    page = new AngularHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
