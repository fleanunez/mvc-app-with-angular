import { NgFilesPage } from './app.po';

describe('ng-files App', () => {
  let page: NgFilesPage;

  beforeEach(() => {
    page = new NgFilesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
