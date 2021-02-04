import * as React from "react"
import '../style/main.scss'
import Footer from "../components/Footer"
//import FAQ from "../components/startup/FAQ"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/investor/Hero"
import Mission from "../components/investor/Mission/Mission"
import CTA from "../components/investor/CTA"


const InvestorPage = () => {
  return (
    <main className="investor">
      <SEO />
      <Header />
      <Hero />
      <Mission />
      <CTA />
      <Footer />
    </main>
  )
}

export default InvestorPage
