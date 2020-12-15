import * as React from "react"
import Hero from "../components/Hero/Hero"
import '../style/main.scss'
import Mission from "../components/Mission/Mission"
import Program from "../components/Program/Program"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ"
import SEO from "../components/SEO"
//import Header from "../components/Header"


const IndexPage = () => {
  return (
    <main className="home">
      <SEO />
      <Hero />
      <Mission />
      <Program />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default IndexPage
