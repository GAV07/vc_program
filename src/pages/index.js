import * as React from "react"
import '../style/main.scss'
import Footer from "../components/Footer"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Hero from "../components/home/Home"


const IndexPage = () => {
  return (
    <main className="home">
      <SEO />
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}

export default IndexPage
