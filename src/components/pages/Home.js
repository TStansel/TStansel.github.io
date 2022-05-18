import '../../App.css'
import MainSection from '../MainSection'
import React from 'react'
import ExpCards from '../ExpCards'
import ProjectCards from '../ProjectCards'
import MtnCards from '../MtnCards'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <MainSection id="home"/>
            <ExpCards id="experience"/>
            <ProjectCards id="projects"/>
            <MtnCards id="mountains"/>
            <Footer id="footer"/>
        </>
    )
}

export default Home;
