import { CATS, POSTS } from '../data'
import Reveal from './Reveal'

export default function TopicIndex() {
  return (
    <section className="index" id="topics">
      <div className="wrap">
        <Reveal>
  <div className="sec-h">
    <p className="cat">The index</p>
    <h2>Topics we tangle with</h2>
  </div>
</Reveal>

        <div className="stack">
          {CATS.map((name, i) => {
            const posts = POSTS.filter((p) => p.c === i)
            const p = posts[0]
            return (
              <article key={name} className="scard" style={{ '--i': i }}>
                {p && (
                  <img src={p.img} alt="" loading="lazy" style={{ objectPosition: p.focus }} />
                )}
                <div className="sshade" aria-hidden="true" />
                <span className="snum" aria-hidden="true">0{i + 1}</span>
                <div className="sbody">
                  <p className="scount">
                    {posts.length} {posts.length === 1 ? 'story' : 'stories'}
                  </p>
                  <h3>{name}</h3>
                  {p && <p className="spost"><strong>{p.t}</strong>. {p.x}</p>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}