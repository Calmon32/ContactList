import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks'
import { useUsers } from '../components/UserData'
import { configJson } from '../service/config';

const { tabs, numberCards } = configJson;

jest.mock('axios');

test('should format user', () => {
  const users = [{
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Henrike",
      "last": "Schuchardt"
    },
    "location": {
      "street": {
        "number": 5853,
        "name": "Am Sportplatz"
      },
      "city": "Bischofswerda",
      "state": "Berlin"
    },
    "email": "henrike.schuchardt@example.com",
    "phone": "0803-7741088",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/60.jpg",
    }
  }];
  const resp = { data: { results: users } };
  axios.get.mockImplementationOnce(() => Promise.resolve(resp));

  const { result, waitForValueToChange } = renderHook(() => useUsers({ tabs, numberCards }))

  waitForValueToChange(() => {
    if (!result.current) return
    expect(result.current.h.length).toBe(1)
    expect(result.current.h[0].name).toBe('Henrike Schuchardt')
    expect(result.current.h[0].address).toBe('Am Sportplatz 5853\nBischofswerda, Berlin')
    expect(result.current.h[0].email).toBe('henrike.schuchardt@example.com')
    expect(result.current.h[0].phone).toBe('0803-7741088')
  })
})
