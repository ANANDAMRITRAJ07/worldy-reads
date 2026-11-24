import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import bg from '../assets/contact-hero.webp'
import { FacebookIcon, XIcon } from '../sections/icons'
import Seo from '../sections/Seo'

const EMAIL = 'anandamritraj18@gmail.com'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  function submit(e) {
    e.preventDefault()
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)
    const subject = encodeURIComponent('Message from Worldy Reads')
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Worldy Reads with questions, corrections or story ideas. Write to us by email or find us on X and Facebook."
        path="/contact"
      />
      <section className="cpage">
        <img className="cpage-img" src={bg} alt="" />
        <div className="cpage-shade" aria-hidden="true" />

        <div className="cpanel">
          <div className="chead">
            <span>[ Contact ]</span>
            <span>[ Bengaluru, India ]</span>
          </div>

          <div className="cbody">
            <div className="cleft">
              <h1>Let’s talk history.</h1>
              <div className="csoc">
                <a href={`mailto:${EMAIL}`} aria-label="Email us"><Mail size={20} aria-hidden="true" /></a>
                <a href="https://www.facebook.com/anand.amritraj.52/" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://x.com/Anand98385588" rel="noopener" aria-label="X"><XIcon /></a>
                <a href="https://www.google.com/maps/search/?api=1&query=Bengaluru" rel="noopener" aria-label="Location: Bengaluru on Google Maps"><MapPin size={20} aria-hidden="true" /></a>
              </div>
            </div>

            <div className="cright">
              <div className="cinfo">
                <div>
                  <p className="clabel"><Mail size={16} aria-hidden="true" /> Contact info</p>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <a href="https://x.com/Anand98385588" rel="noopener">@Anand98385588</a>
                </div>
                <div>
                  <p className="clabel"><MapPin size={16} aria-hidden="true" /> Address</p>
                  <p>Bengaluru<br />India</p>
                </div>
              </div>

              <form className="cform" onSubmit={submit}>
                <label className="sr" htmlFor="name">Name</label>
                <input id="name" placeholder="Your name" required autoComplete="name" value={f.name} onChange={set('name')} />

                <label className="sr" htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@yourname.com" required autoComplete="email" value={f.email} onChange={set('email')} />

                <label className="sr" htmlFor="message">Message</label>
                <textarea id="message" rows="3" placeholder="Enter your message here..." required value={f.message} onChange={set('message')} />

                <button className="csend" type="submit">Send by email</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}