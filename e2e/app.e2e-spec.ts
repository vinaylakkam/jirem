import { JiremPage } from './app.po';

describe('jirem App', function() {
  let page: JiremPage;

  beforeEach(() => {
    page = new JiremPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
