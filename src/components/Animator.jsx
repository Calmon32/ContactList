import { useState, useEffect, useCallback } from 'react';
import { timeout } from '../service/timeout'

export function useAnimator(animatorTimeout) {

  const [state, setState] = useState(false);
 
  useEffect(() => {
    timeout(100).then(() => animate(!state))
  }, []);
  
  const animate = useCallback(async (to) => {
    setState(to);
    await timeout(animatorTimeout);
  }, [])

  return { state, animate }
}