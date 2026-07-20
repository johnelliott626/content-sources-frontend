import { test, expect } from 'test-utils';
import { navigateToRepositories } from './helpers/navHelpers';
import { closeGenericPopupsIfExist } from './helpers/helpers';

test.describe('Playwright learning smoke test', () => {
  test('repositories page loads with expected title', async ({ page }) => {
    await navigateToRepositories(page);
    await closeGenericPopupsIfExist(page);

    await expect(page).toHaveTitle('Repositories - Content | RHEL');
    await expect(
      page.getByText('View all repositories within your organization.'),
    ).toBeVisible();
  });
});