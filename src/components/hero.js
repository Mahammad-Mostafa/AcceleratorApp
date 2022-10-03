import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../styles/hero.module.css"

const Hero = () =>
  {
  return (
    <section className={Styles.body}>
      <div className="wrapper">
        <div className={Styles.cover}></div>
        <div className={Styles.subtitle}>Join in and connect</div>
        <div className={Styles.title}>To faster your innovation potential</div>
        <div className={Styles.text}>AcceleratorApp Innovation Community — Tools and community to facilitate innovation between all members of our community</div>
        <StaticImage src="../images/video.png" alt="video"/>
      </div>
    </section>
    )
  }

export default Hero