import bg from '../assets/manifesto-bg.webp'
import Reveal from './Reveal'

const pillars = [
  ['Understand', 'What happened, and why it unfolded as it did.'],
  ['Discover', 'The forgotten stories the textbooks skip.'],
  ['Learn', 'How civilizations were built, ruled and lost.'],
  ['Connect', 'How the past keeps shaping the present.'],
]

export default function Manifesto() {
  return (
    <section className="manif">
      <img className="manif-img" src={bg} alt="" loading="lazy" />
      <div className="manif-shade" aria-hidden="true" />

      <div className="wrap manif-in">
        <Reveal>
          <p className="kick">Our approach</p>
          <h2>
            Where perspectives differ, we say so. <em>Clarity over complexity.</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <ol className="pillars">
            {pillars.map(([title, text], i) => (
              <li key={title}>
                <span className="pnum">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}