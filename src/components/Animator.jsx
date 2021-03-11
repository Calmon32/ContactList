import { useState, useEffect } from 'react';

export function Animator(animatorTimeout) {

  const [state, setState] = useState(false);
 
  useEffect(() => {
    timeout(100).then(() => animate(!state))
  }, []);

  function timeout(time) {
    return new Promise(resolve => { 
      setTimeout(resolve, time);
    });
  }

  async function animate(to) {
    setState(to);
    await timeout(animatorTimeout);
  }

  return { state, animate }
}