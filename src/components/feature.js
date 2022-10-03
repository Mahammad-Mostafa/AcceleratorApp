import * as React from "react"
import { graphql , useStaticQuery , Link } from "gatsby"
import * as Styles from "../styles/feature.module.css"

const Cards = (props) =>
  {
  return props.cards.map((item , step) =>
      {
      if(step === props.cards.length - 1)
        {
        return (
          <div key={10101} className={Styles.last}>
            <Link className={Styles.link} to="/">Discover its functions<svg className={Styles.arrow}><use href="#arrow"/></svg></Link>
          </div>
          )
        }
      else
        {
        const card__icon = item.frontmatter.order === 7 ? Styles.card__zapier : Styles.card__icon
        return (
          <div key={item.id} className={Styles.card}>
            <img className={card__icon} src={item.frontmatter.icon} alt=""/>
            <div className={Styles.card__title}>{item.frontmatter.title}</div>
            <div className={Styles.card__text}>{item.frontmatter.text}</div>
          </div>
          )
        }
      })
  }

const Feature = () =>
  {
  let query = useStaticQuery(graphql
    `{
    feature: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(feature)/"}} sort: {fields: frontmatter___order})
      {
      nodes
        {
        id
        frontmatter
          {
          icon
          title
          text
          order
          }
        }
      }
    }`).feature.nodes
  query.push({})
  return (
    <section className={Styles.body}>
      <div className="wrapper">
        <div className={Styles.title}>Features integrated</div>
        <div className={Styles.text}>Know all our features that we have for accelerate your business</div>
        <div className={Styles.cards}>
          <Cards cards={query}/>
        </div>
      </div>
    </section>
    )
  }

export default Feature