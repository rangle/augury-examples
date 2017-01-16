import { InputOutPage } from './app.po';

describe('input-out App', function() {
  let page: InputOutPage;

  beforeEach(() => {
    page = new InputOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
