import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../styles/customer.module.css"

const Customer = () =>
  {
  return (
    <section className="wrapper">
      <div className={Styles.body}>
        <div className={Styles.title}>What our customers say</div>
        <Link className={Styles.link} to="/">150 + incubators/accelerators using AcceleratorApp<svg className={Styles.arrow}><use href="#arrow"/></svg></Link>
        <div className={Styles.block}>
          <div className={Styles.text}>
            "AcceleratorApp has helped us a lot to accelerate and optimize our application and selection process. 
            We got very positive feedback from our team and applicants. 
            It’s a great tool for every company reviewing and processing a large number of applications whilst minimizing manual work. 
            The tool is customizable, user-friendly and the AcceleratorApp team is very responsive and supportive!"
            <br/><br/>
            François Jolly, Director of Programs • Startup lab
          </div>
          <StaticImage width={150} src="../images/customer/logo.png" alt="logo"/>
          <StaticImage className={Styles.avatar} src="../images/customer/avatar.png" alt="avatar"/>
        </div>
      </div>
      <div className={Styles.label}>What are you waiting for?</div>
      <div className={Styles.subtitle}>Join +150 companies that already trust us for their growth</div>
      <div className={Styles.links}>
        <Link className={Styles.request} to="/">Request a Demo</Link>
        <Link className={Styles.contact} to="/">Contact Us</Link>
      </div>
    </section>
    )
  }

export default Customer