import axios from 'axios';
import restApi from '../service/api';

jest.mock('axios');

test('should fetch users', async () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockImplementationOnce(() => Promise.resolve(resp));

  await expect(restApi.getUser()).resolves.toEqual(users);
});