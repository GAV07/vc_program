import * as React from "react"
import Hero from "../components/startup/Hero"
import '../style/main.scss'
import Mission from "../components/startup/Mission/Mission"
import Program from "../components/startup/Program/Program"
import CTA from "../components/startup/CTA"
import Footer from "../components/Footer"
import FAQ from "../components/startup/FAQ"
import SEO from "../components/SEO"
import Header from "../components/Header"


const StartupPage = () => {
  return (
    <main className="startup">
      <SEO />
      <Header />
      <Hero />
      <Mission />
      <Program />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default StartupPage
