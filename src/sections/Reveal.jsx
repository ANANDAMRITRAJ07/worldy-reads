import FadeContent from '@/components/FadeContent'   // adjust to the printed path
import useMotionOK from '../lib/useMotionOK'

export default function Reveal({ children, delay = 0 }) {
  const motion = useMotionOK()
  if (!motion) return <>{children}</>      // "reduce motion": no animation at all

  return (
    <FadeContent blur duration={900} delay={delay} threshold={0.15}>
      {children}
    </FadeContent>
  )
}