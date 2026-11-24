import { Link, NavLink } from 'react-router-dom'

const date = new Date().toLocaleDateString('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric',
})

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Masthead() {
  return (
    <>
      <div className="wrap">
        <div className="top">
          <span>Vol. I · {date}</span>
          <span>Bihar, India</span>
        </div>
        <div className="mast">
          <Link to="/">Worldy <em>Reads</em></Link>
          <p>History, Told With Clarity</p>
        </div>
      </div>

      <nav className="bar" aria-label="Main">
        <ul>
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}