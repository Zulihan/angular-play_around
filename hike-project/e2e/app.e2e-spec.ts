import { ZuProjectPage } from './app.po';

describe('zu-project App', function() {
  let page: ZuProjectPage;

  beforeEach(() => {
    page = new ZuProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
