import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import ScheduleStrip from './components/ScheduleStrip'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useScrollReveal()
  const isHomePage =
    window.location.pathname === '/' || window.location.pathname === '/index.html'

  if (!isHomePage) {
    return <NotFound />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <ScheduleStrip />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
