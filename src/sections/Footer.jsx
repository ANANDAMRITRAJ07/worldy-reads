import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowUp } from 'lucide-react'
import { CATS } from '../data'
import { FacebookIcon, XIcon } from './icons'

const EMAIL = 'anandamritraj18@gmail.com'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <Link className="fword" to="/">Worldy <em>Reads</em></Link>

        <div className="fgrid">
          <div>
            <p className="fblurb">
              Understanding the world through its past. Clear, carefully
              researched stories on empires, people and ideas.
            </p>
            <div className="fsoc">
              <a href={`mailto:${EMAIL}`} aria-label="Email us"><Mail size={18} aria-hidden="true" /></a>
              <a href="https://www.facebook.com/anand.amritraj.52/" rel="noopener" aria-label="Facebook"><FacebookIcon size={18} /></a>
              <a href="https://x.com/Anand98385588" rel="noopener" aria-label="X"><XIcon size={16} /></a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="fh">Explore</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="fh">Topics</h2>
            <ul>
              {CATS.map((c) => (
                <li key={c}><Link to="/#topics">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="fh">Contact</h2>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className="floc"><MapPin size={16} aria-hidden="true" /> Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="fbar">
          <span>Copyright © {new Date().getFullYear()}, Worldy Reads. All Rights Reserved.</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}