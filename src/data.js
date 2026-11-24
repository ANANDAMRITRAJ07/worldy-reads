import constantinople from './assets/posts/constantinople.jpg'
import bengalFamine from './assets/posts/bengal-famine.webp'
import calicut from './assets/posts/calicut.jpg'
import ashoka from './assets/posts/ashoka.jpg'
import printingPress from './assets/posts/printing-press.jpg'
import verdun from './assets/posts/verdun.webp'

export const CATS = [
  'Disasters, Health & Environmental Events',
  'Empires, States & Governance',
  'Exploration & Global Encounters',
  'India Through the Ages',
  'Society, Culture & Ideas',
  'Wars & Conflicts',
]

// c = index into CATS, focus = which part of the image stays visible when cropped
export const POSTS = [
  { t: 'The Fall of Constantinople, 1453', c: 1, d: '7 Nov 2026', r: '9 min read',
    x: 'How a fifty-three-day siege ended a thousand-year empire and redrew the map of Europe and Asia.',
    img: constantinople, alt: '', focus: '50% 50%' },
  { t: 'Churchill and the 1943 Bengal Famine', c: 0, d: '6 Nov 2026', r: '11 min read',
    x: 'Policy, war and weather collided in Bengal.',
    img: bengalFamine, alt: '', focus: '50% 40%' },
  { t: 'Landfall at Calicut', c: 2, d: '5 Nov 2026', r: '8 min read',
    x: 'Vasco da Gama’s arrival in 1498 opened a sea route that reshaped trade.',
    img: calicut, alt: '', focus: '50% 50%' },
  { t: 'Ashoka and the Mauryan Road', c: 3, d: '4 Nov 2026', r: '7 min read',
    x: 'The emperor who turned from conquest to conscience.',
    img: ashoka, alt: '', focus: '50% 50%' },
  { t: 'The Printing Press and the Mind of Europe', c: 4, d: '3 Nov 2026', r: '6 min read',
    x: 'Movable type did more than spread books. It changed who could argue, and about what.',
    img: printingPress, alt: '', focus: '50% 50%' },
  { t: 'Verdun, 1916', c: 5, d: '2 Nov 2026', r: '10 min read',
    x: 'Ten months, one fortress line, and the battle that came to define attrition.',
    img: verdun, alt: '', focus: '50% 50%' },
]