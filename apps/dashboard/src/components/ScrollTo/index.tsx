import React, { useRef, useEffect } from 'react'

const ScrollTo = ({ to, duration }) => {
  const ref = useRef(null)

  useEffect(() => {
    const start = Date.now()
    const end = to
    const step = (start) => {
      const currentTime = Date.now()
      const time = Math.min(1, (currentTime - start) / duration)
      window.scrollTo(0, (end - start) * time + start)
      if (time < 1) {
        const frame = window.requestAnimationFrame((start) => step(start))
        return frame
      }
      window.cancelAnimationFrame(frame)
    }
    const frame = window.requestAnimationFrame((start) => step(start))
  }, [to, duration])

  return <div ref={ref}>Scroll to {to}</div>
}

export default ScrollTo
