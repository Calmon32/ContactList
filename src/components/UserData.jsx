import { useState, useEffect } from 'react';
import restApi from "../service/api";

export function useUsers({ tabs, numberCards }) {

  const [groupedUsers] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    tabs.forEach( tab => groupedUsers[tab] = []);
    loadUsers(numberCards);
  }, [])

  async function loadUsers(count) {
    const { results } = await restApi.getUser({results: count})
    results.forEach(user => {
      const char = user.name.first[0].toLowerCase()
      if (tabs.includes(char)) groupedUsers[char] = [ ...groupedUsers[char], formatUser(user) ] 
    })
    setLoading(false)
  }

  function formatUser(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.large,
      email: user.email,
      phone: user.phone,
      address: `${user.location.street.name} ${user.location.street.number}\n${user.location.city}, ${user.location.state}`
    }
  }

  return !loading && groupedUsers
}