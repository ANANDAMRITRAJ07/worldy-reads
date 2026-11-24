import Cover from '../sections/Cover'
import Ticker from '../sections/Ticker'
import Front from '../sections/Front'
import TopicIndex from '../sections/TopicIndex'
import Manifesto from '../sections/Manifesto'
import Seo from '../sections/Seo'

export default function Home() {
  return (<><Cover /><Ticker /><Front /><TopicIndex /><Manifesto /></>)
}
<Seo
  description="Clear, carefully researched stories on world history: empires, wars, exploration, ideas and the forgotten events that shaped the present."
  path="/"
/>