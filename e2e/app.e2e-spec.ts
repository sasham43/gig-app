import { GigAppPage } from './app.po';

describe('gig-app App', () => {
  let page: GigAppPage;

  beforeEach(() => {
    page = new GigAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
