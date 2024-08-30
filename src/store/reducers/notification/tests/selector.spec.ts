import { RootState } from '../../../types';
import { getMockRootState } from '../../../../common/testHelper';
import { selectNotificationList, selectNotificationState } from '../selectors';


describe('Notification selector', () => {
  let state: RootState;
  beforeAll(() => {
    state = getMockRootState();
  });
  it('should return notifications state', () => {
    const selector = selectNotificationState();
    expect(selector(state)).toEqual({ notifications: [] });
  });
  it('should return notifications list', () => {
    const selector = selectNotificationList();
    expect(selector(state)).toEqual([]);
  });
});