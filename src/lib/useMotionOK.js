import { useEffect, useState } from 'react'

// true when animation is OK. If minWidth is given, also requires a screen at least that wide.
export default function useMotionOK(minWidth = 0) {
  const calc = () =>
    typeof window !== 'undefined' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    window.innerWidth >= minWidth

  const [ok, setOk] = useState(calc)

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setOk(calc())
    m.addEventListener('change', update)
    window.addEventListener('resize', update)
    return () => {
      m.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return ok
}