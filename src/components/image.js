import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({query}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      speak: file(relativePath: { eq: "speaking.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pitch: file(relativePath: { eq: "Chris.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crowd: file(relativePath: { eq: "crowd.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Center for Black Innovation</div>
  // }

  switch (query) {
    case "logo":
      return <Img fluid={data.logo.childImageSharp.fluid} />
      break;
    case "pitch":
      return <Img fluid={data.pitch.childImageSharp.fluid} />
      break;
    case "speak":
      return <Img fluid={data.speak.childImageSharp.fluid} />
      break;
    case "crowd":
      return <Img fluid={data.crowd.childImageSharp.fluid} />
      break;
  }
  
}

export default Image
