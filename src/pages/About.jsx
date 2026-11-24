import { Link } from 'react-router-dom'
import SplitText from '@/components/SplitText'
import useMotionOK from '../lib/useMotionOK'
import headerImg from '../assets/about-hero.webp'
import storyImg from '../assets/about-story.webp'
import Seo from '../sections/Seo'

export default function About() {
  const motion = useMotionOK()

  return (
    <>
      <section className="ph">
  <img className="ph-img" src={headerImg} alt="" />
  <div className="ph-shade" aria-hidden="true" />
  <div className="wrap">
    <p className="kick">About Worldy Reads</p>
    <h1 aria-label="Why we write about the past.">
      {motion ? (
        <span aria-hidden="true">
          <SplitText
            text="Why we write about the past."
            tag="span"
            splitType="words"
            delay={60}
            duration={0.8}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
        </span>
      ) : (
        'Why we write about the past.'
      )}
    </h1>
  </div>
</section>

      <div className="wrap">
        <section className="story">
          <div className="img">
            <img src={storyImg} alt="" loading="lazy" />
          </div>
          <div>
            <p className="cat">Our story</p>
<h2>History, explained plainly</h2>
            <p className="dc">
              Our writing emphasizes clarity over complexity. While historical
              inquiry often involves debate and differing interpretations, we
              strive to explain ideas in a way that is approachable for general
              readers without sacrificing intellectual rigour.
            </p>
            <p>
              Where perspectives differ, we acknowledge them, allowing readers
              to engage critically with the past.
            </p>
          </div>
        </section>

        <section className="mv">
          <div>
            <p className="cat">Mission</p>
            <h3>Make history understandable</h3>
            <p>
              To explain the events, people and ideas that shaped our world in
              clear language, with care for accuracy.
            </p>
          </div>
          <div>
            <p className="cat">Vision</p>
            <h3>A curious, informed reader</h3>
            <p>
              A place where anyone can discover forgotten stories and see how
              the past keeps shaping the present.
            </p>
          </div>
        </section>

        <div className="about-cta">
          <p>Have a question, a correction or a story idea?</p>
          <Link className="btn" to="/contact">Get in touch</Link>
        </div>
      </div>
    </>
  )
}
<Seo
  title="About"
  description="Learn how Worldy Reads approaches history: clear writing, careful research and honest acknowledgement of differing interpretations."
  path="/about"
/>