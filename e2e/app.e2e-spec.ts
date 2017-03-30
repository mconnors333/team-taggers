import { TeamTaggersPage } from './app.po';

describe('team-taggers App', () => {
  let page: TeamTaggersPage;

  beforeEach(() => {
    page = new TeamTaggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
