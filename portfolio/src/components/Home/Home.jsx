import React from 'react'
import Data from './Data'
import './home.css'
import Social from './Social'


export default function Home() {
  return (
    <section className="home section" id="home">
        <div className="container home__container grid">
            <div className="home__content grid">
                <Social />
                <div className="home__img"></div>
                <Data />
            </div>
        </div>
    </section>
  )
}
