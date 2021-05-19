import React from 'react'
import '../App.css'
import './MainSection.css'
import TextLoop from "react-text-loop"

function MainSection() {

    return (
        <div className='main-container'>
            <h2>
                Hello, I'm Thomas Stansel
                <br/>
                <TextLoop interval={1300}>
                    <span>Software engineer</span>
                    <span>Byu cs student</span>
                    <span>Lover of national parks</span>
                    <span>Life-long learner</span>
                </TextLoop>
            </h2>
        </div>
    )
}

export default MainSection
