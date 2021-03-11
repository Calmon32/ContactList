import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';
import { useAnimator } from '../components/Animator';
import { timeout } from '../service/timeout'

test('should change value after timeout', async () => {
  await act(async () => {
    const { result, waitForValueToChange } = renderHook(() => useAnimator(500))
    expect(result.current.state).toBe(false)

    await timeout(500)
  
    expect(result.current.state).toBe(true)

    await result.current.animate(false)
    
    expect(result.current.state).toBe(false)
  })


})
