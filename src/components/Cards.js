import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1 id="projects">Projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                <ul className="cards-items">
                        <CardItem
                            icon="fab fa-slack"
                            text="Gravity"
                            label="Java"
                            description='A slack app built to take each new message, look for a similar message in the history of the slack channel using machine learning,
                                and reccomend the thread of that found message as a potential answer. At peak, had 400 users and ~60,000 events hitting the system per day.'
                            //github="https://github.com/TStansel/Gravity"
                            youtube="https://www.youtube.com/watch?v=m3pYBpD28oU"
                            />
                        <CardItem
                            icon="fab fa-react"
                            text="Athena"
                            label="Athena"
                            description="A mobile app built to make finding internships/jobs easier to find and easier to apply to. Only requires the 
                            user's information to be entered once and then the user is only shown jobs that match their qualifications. Using a Tinder-like structure to show
                            the office space and other company information, applying is done through simply clicking a few buttons."
                            github="https://github.com/TStansel/Sandbox"
                            youtube="https://www.youtube.com/watch?v=Anzb4yPA3rE"
                            />
                        <CardItem
                            icon="fab fa-python"
                            text="AlexaCAPS"
                            label="Alexa"
                            description="An Alexa Skill that is triggered when the student asks for their university's
                            Counseling and Psychological Services(CAPS) phone number. A lambda function then uses web scraping to get the specfied university's
                            CAPS number and gives it back to the student through the Alexa device."
                            github="https://github.com/TStansel/AlexaCAPS"
                            />
                    </ul>
                <ul className="cards-items">
                    <CardItem
                            icon="fab fa-python"
                            text="TherAssist"
                            label="Python"
                            description="
                            Using a pre-trained machine learning modal, the application is able to detect the face, and reognize the emotion on it.
                            This allows the application to time how long it takes the user to replicate a displayed emotion.
                            For a demo, click the Youtube link below."
                            github="https://github.com/arianneghislainerull/defHacks--TeamName--project"
                            youtube="https://youtu.be/smWooWXbKfM"
                            />
                    <CardItem
                            icon="fab fa-android"
                            text="Tweeter"
                            label="Android"
                            description="Class project to create a Twitter clone using proper design patterns. Implemented the Template-Method Pattern, the Observer Pattern, the Facade pattern, and others. 
                            Uses AWS API Gateway, AWS Lambda, and AWS DynamoDB to interact with and keep the data consistent."
                            //youtube="https://youtu.be/smWooWXbKfM"
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards