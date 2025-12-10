import React from 'react'

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main title="은지 유튜브" discription="유튜브 모음집">
      
    <Today />
    <Developer />
    <Gsap />
    <Portfolio />
    <Webd />
    <Website />
    <Youtube />

    </Main>
  )
}

export default Home
