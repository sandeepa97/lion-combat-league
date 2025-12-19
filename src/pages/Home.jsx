import Hero from '../components/Hero'
import UpcomingEvents from '../components/UpcomingEvents'
import Shop from './Shop'

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="container">
        <Shop />
      </div>
    </div>
  )
}
