import * as React from "react"
import { useState , useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/common.css"
import * as Styles from "../styles/layout.module.css"

const Menus = () =>
  {
  const menus = [{id: 1 , title: "Community"} , {id: 2 , title: "Modules"} , {id: 3 , title: "Company"} , {id: 4 , title: "Pricing"}]
  return menus.map((item) =>
      {
      return <Link key={item.id} className={Styles.menu} to="/">{item.title}</Link>
      })
  }

const Links = () =>
  {
  const links = [
    {
    id: 1,
    title: "Community",
    text: [
      {id: 11 , title: "Incubator/Accelerator"},
      {id: 12 , title: "Corporations"},
      {id: 13 , title: "Startups"},
      {id: 14 , title: "Investor"},
      {id: 15 , title: "Open Challenges"}
    ]},
    {
    id: 2,
    title: "Modules",
    text: [
      {id: 21 , title: "Coaching Module"},
      {id: 22 , title: "Data Module"},
      {id: 23 , title: "Ecosystem Module"},
      {id: 24 , title: "LMS Module"},
      {id: 25 , title: "Events"},
      {id: 26 , title: "Application Proccessing"}
    ]},
    {
    id: 3,
    title: "Company",
    text: [
      {id: 31 , title: "About Us"},
      {id: 32 , title: "Carrers"},
      {id: 33 , title: "Blog"},
      {id: 34 , title: "Pricing"},
      {id: 35 , title: "Contact Us"}
    ]},
    {
    id: 4,
    title: "Documentation",
    text: [
      {id: 41 , title: "Documentation"},
      {id: 42 , title: "Release Log"},
      {id: 43 , title: "FAQ"},
      {id: 44 , title: "Legal"}
    ]},
    {
    id: 5,
    title: "Follow",
    text: [
      {id: 51 , icon: "/svgs/social/linkedin.svg"},
      {id: 52 , icon: "/svgs/social/facebook.svg"},
      {id: 53 , icon: "/svgs/social/instagram.svg"},
      {id: 54 , icon: "/svgs/social/twitter.svg"}
    ]}
  ]
  return links.map((column) =>
      {
      return (
        <div key={column.id} className={Styles.column}>
          <div className={Styles.subtitle}>{column.title}</div>
          {column.text.map((row) =>
            {
            if(column.id === 5)
              {
              return <a key={row.id} href="#"><img className={Styles.social} src={row.icon} alt=""/></a>
              }
            if(row.id === 32)
              {
              return <Link key={row.id} className={Styles.link} to="/">{row.title}<span className={Styles.badge}>We’re hiring!</span></Link>
              }
            return <Link key={row.id} className={Styles.link} to="/">{row.title}</Link>
            })}
        </div>
        )
      })
  }

const BarLinks = () =>
  {
  const barlinks = [{id: 1 , title: "Privacy"} , {id: 2 , title: "Cookies"} , {id: 3 , title: "Terms Of Use"} , {id: 4 , title: "DPA"} , {id: 5 , title: "Subproccesors"}]
  return barlinks.map((item) =>
    {
    return <Link key={item.id} className={Styles.link} to="/">{item.title}</Link>
    })
  }

const Layout = ({children}) =>
  {
  let [ toggleButton , setButton ] = useState(false)
  let [ currentClass , setClass ] = useState(Styles.header)
  useEffect(() =>
    {
    if(toggleButton)
      {
      setClass(Styles.header + " " + Styles.accent + " " + Styles.expand)
      }
    else
      {
      if(window.pageYOffset > 10)
        {
        setClass(Styles.header + " " + Styles.accent)
        }
      else
        {
        setClass(Styles.header)
        }
      }
    } , [toggleButton])
  useEffect(() =>
    {
    if(window.pageYOffset > 10)
      {
      setClass(Styles.header + " " + Styles.accent)
      }
    document.onscroll = () =>
      {
      setButton(false)
      if(window.pageYOffset > 10)
        {
        setClass(Styles.header + " " + Styles.accent)
        }
      else
        {
        setClass(Styles.header)
        }
      }
    } , [])
  const clickbutton = () =>
    {
    if(toggleButton)
      {
      setButton(false)
      }
    else
      {
      setButton(true)
      }
    }
  return (
    <div>
      <div className={currentClass}>
        <img className={Styles.button} src="/svgs/menu.svg" alt="menu" onClick={clickbutton}/>
        <nav className={"wrapper " + Styles.navigation}>
          <Link className={Styles.logo} to="/"><StaticImage src="../images/logo.png" alt="logo"/></Link>
          <div>
            <Menus/>
            <button className={Styles.sign}>Sign In</button>
            <button className={Styles.request}>Request a Demo</button>
          </div>
        </nav>
      </div>
      {children}
      <footer className={Styles.footer}>
        <div className="wrapper">
          <div className={Styles.title}>Join our growing community</div>
          <div className={Styles.label}>Sign up for news and updates about AcceleratorApp</div>
          <form className={Styles.form}>
            <input className={Styles.input} type="email"  placeholder="Your email" required/>
            <svg className={Styles.arrow}><use href="#arrow"/></svg>
          </form>
          <div className={Styles.links}>
            <Links/>
          </div>
          <div className={Styles.bar}>
            <div>
              <BarLinks/>
            </div>
            <div>
              Copyright © 2022 AcceleratorApp All Rights Reserved &ensp; | &ensp; <img className={Styles.language} src="/svgs/language.svg"/> &ensp; English
            </div>
          </div>
          <svg width="0" height="0">
            <symbol id="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 32 32">
              <title>arrow</title>
              <path d="M24.219 7.391c-0.315 0.156-0.646 0.452-0.805 0.725-0.087 0.154-0.139 0.339-0.139 0.536 0 0.169 0.038 0.329 0.106 0.472l-0.003-0.007c0.057 0.129 1.052 1.409 2.21 2.842s2.106 2.626 2.106 2.649c0 0.023-6.045 0.049-13.435 0.057l-13.435 0.013-0.251 0.146c-0.309 0.182-0.463 0.421-0.541 0.847-0.122 0.649 0.112 1.28 0.562 1.521l0.23 0.122 26.923 0.053-1.914 2.368c-2.33 2.878-2.371 2.933-2.476 3.184-0.199 0.475-0.044 0.984 0.423 1.392 0.644 0.56 1.302 0.545 1.849-0.038 0.093-0.099 1.396-1.705 2.897-3.57s2.835-3.486 2.964-3.604c0.52-0.484 0.651-1.143 0.347-1.745-0.086-0.173-0.195-0.32-0.326-0.446l-0.001-0.001c-0.091-0.072-1.466-1.739-3.055-3.704-3.184-3.938-3.169-3.923-3.714-3.923-0.008-0-0.017-0-0.026-0-0.181 0-0.352 0.041-0.505 0.113l0.007-0.003z"></path>
            </symbol>
          </svg>
        </div>
      </footer>
    </div>
    )
  }

export default Layout