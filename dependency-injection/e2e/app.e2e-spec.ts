import { FormNewUserPage } from './app.po';

describe('form-new-user App', function() {
  let page: FormNewUserPage;

  beforeEach(() => {
    page = new FormNewUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
