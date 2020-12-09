import * as React from "react"
import Hero from "../components/Hero/Hero"
import '../style/main.scss'
import Mission from "../components/Mission/Mission"
import Program from "../components/Program/Program"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
//import Header from "../components/Header"


// markup
const IndexPage = () => {
  return (
    <main >
      <Hero />
      <Mission />
      <Program />
      <CTA />
      <Footer />
    </main>
  )
}

export default IndexPage
