import { AversNgPage } from './app.po';

describe('avers-ng App', function() {
  let page: AversNgPage;

  beforeEach(() => {
    page = new AversNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
