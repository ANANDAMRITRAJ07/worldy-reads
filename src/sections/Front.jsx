import { CATS, POSTS } from '../data'
import Img from './Img'
import Reveal from './Reveal'

function Meta({ p }) {
  return <span className="meta">{p.d} · {p.r}</span>
}

export default function Front() {
  const lead = POSTS[0]
  return (
    <div className="wrap" id="front">
      <Reveal>
        <div className="front">
          <article className="lead">
            <Img post={lead} />
            <p className="cat" style={{ marginTop: '1.1rem' }}>{CATS[lead.c]}</p>
            <h2>{lead.t}</h2>
            <p className="x">{lead.x}</p>
            <Meta p={lead} />
          </article>

          <div>
            <h2 className="sh">Also in this edition</h2>
            {POSTS.slice(1, 4).map((p) => (
              <article className="item" key={p.t}>
                <Img post={p} />
                <div>
                  <p className="cat">{CATS[p.c]}</p>
                  <h3>{p.t}</h3>
                  <Meta p={p} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="duo">
          {POSTS.slice(4).map((p) => (
            <article key={p.t}>
              <Img post={p} />
              <p className="cat">{CATS[p.c]}</p>
              <h3>{p.t}</h3>
              <p className="x">{p.x}</p>
              <Meta p={p} />
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  )
}