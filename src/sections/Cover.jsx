import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.webp'
import SplitText from '@/components/SplitText'
import Particles from '@/components/Particles'
import useMotionOK from '../lib/useMotionOK'

export default function Cover() {
  const motion = useMotionOK()         // false if "reduce motion" is on
  const wide = useMotionOK(760)        // particles only on tablets and up

  return (
    <section className="cover">
      <img className="cover-img" src={heroImg} alt="" />
      <div className="cover-shade" aria-hidden="true" />

      {/* {wide && (
        <div className="cover-fx" aria-hidden="true">
          <Particles
            particleColors={['#D49A63', '#F3E6C9']}
            particleCount={140}
            particleSpread={10}
            speed={0.06}
            particleBaseSize={90}
            alphaParticles
            moveParticlesOnHover={false}
          />
        </div>
      )} */}

      <div className="wrap">
        <p className="kick">Worldy Reads · History &amp; ideas</p>

        <h1 aria-label="Understanding the world through its past.">
          {motion ? (
            <span aria-hidden="true">
              <SplitText
                text="Understanding the world through its "
                tag="span"
                splitType="words"
                delay={70}
                duration={0.9}
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />
              <em>
                <SplitText
                  text="past."
                  tag="span"
                  splitType="chars"
                  delay={90}
                  duration={0.9}
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </em>
            </span>
          ) : (
            <>Understanding the world through its <em>past.</em></>
          )}
        </h1>

        <p className="lede">
          From ancient empires to modern revolutions, explore history as a
          living force that still shapes today’s world.
        </p>
        <div className="cta">
          <Link className="btn" to="/#front">Read the stories</Link>
          <Link className="btn o" to="/about">About us</Link>
        </div>
      </div>
    </section>
  )
}