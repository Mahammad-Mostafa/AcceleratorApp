import * as React from "react"
import { graphql , useStaticQuery , Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../styles/community.module.css"

const Blocks = (props) =>
  {
  return (
    props.blocks.map((item) =>
      {
      return (
      <div key={item.id} className={Styles.block}>
        <div className={Styles.image}>
          <GatsbyImage image={item.childImageSharp.gatsbyImageData} objectFit="contain" alt=""/>
        </div>
      </div>
      )
      })
    )
  }

const Bullets = () =>
  {
  const bullets = [{id: 1 , title: "Lorem ipsum dolor sit"} ,  {id: 2 , title: "Lorem ipsum dolor sit"} ,  {id: 3 , title: "Lorem ipsum dolor sit"}]
  return bullets.map((item) =>
      {
      return (
        <div key={item.id}>
          <img className={Styles.card__check} src="/svgs/check.svg" alt=""/>
          <span className={Styles.card__text}>{item.title}</span>
        </div>
        )
      })
  }

const Cards = (props) =>
  {
  return props.cards.map((item) =>
      {
      return (
      <div key={item.id} className={Styles.card}>
        <div className={Styles.card__header}>
          <img className={Styles.card__icon} src={item.frontmatter.icon} alt=""/>
          <span className={Styles.card__title}>{item.frontmatter.title}</span>
        </div>
        <div className={Styles.card__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis
          <br/><br/>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
        </div>
        <div className={Styles.card__line}></div>
        <div className={Styles.card__subtitle}>Popular Features</div>
        <Bullets/>
        <Link className={Styles.card__link} to="/">Get Started</Link>
      </div>
      )
      })
  }

const Community = () =>
  {
  const query = useStaticQuery(graphql
    `{
    images: allFile(filter: {relativeDirectory: {eq: "community"}, sourceInstanceName: {eq: "images"}})
      {
      nodes
        {
        id
        childImageSharp
          {
          gatsbyImageData
          }
        }
      }
    icons: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(community)/"}} sort: {fields: frontmatter___order})
      {
      nodes
        {
        id
        frontmatter
          {
          icon
          title
          }
        }
      }
    }`)
  return (
    <section className="wrapper">
      <div className={Styles.blocks}>
        <Blocks blocks={query.images.nodes}/>
      </div>
      <div className={Styles.subtitle}>Community</div>
      <div className={Styles.title}>Lorem ipsum dolor sit amet</div>
      <div className={Styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div className={Styles.cards}>
        <Cards cards={query.icons.nodes}/>
      </div>
    </section>
    )
  }

export default Community