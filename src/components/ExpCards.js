import React from 'react'
import ExpCardItem from './ExpCardItem'
import './ExpCards.css'
import byu from "../images/byu-icon.png";
import c1 from "../images/CapitalOne-icon.png";
import bluehost from "../images/Bluehost-icon.png";
import taxbit from "../images/taxbit-icon.png";
import aws from "../images/aws.jpg";
import lyft from "../images/lyft.jpg"

function ExpCards() {

    return (
        <div className="exp-cards">
            <h1 className="exp-header" id="experience">Where I've Worked</h1>
            <div className="exp-cards-container">
                <div className="exp-cards-wrapper">
                <ul className="exp-cards-items">
                        <ExpCardItem
                            src={lyft}
                            text="SWE Intern"
                            label="Lyft"
                            link="https://www.lyft.com"
                            description="Expected Fall 2022"
                            />
                        <ExpCardItem
                            src={aws}
                            text="SDE Intern"
                            label="AWS"
                            link="https://aws.amazon.com"
                            description="Working to provide insights into the reason behind groups of calls by using ML to reveal and identify the common theme behind these calls from an on-demand AWS call center."
                            />
                        <ExpCardItem
                            src={taxbit}
                            text="SWE Intern"
                            label="Taxbit"
                            link="https://taxbit.com"
                            description="Saved 15 hours per incident by architecting and creating a tool to extract execution data from AWS step functions and make the data queryable using a no code solution.
                            Increased reliability and maintainability by writing dozens of unit, integration, and property tests."
                            />
                    </ul>
                    <ul className="exp-cards-items">
                        <ExpCardItem
                            src={c1}
                            text="SWE Intern"
                            label="Capital One"
                            link="https://www.capitalone.com"
                            description='Saved 3 hours per week by automating the joining of several data tables, with new data points, into an API with 10,000 requests per day.
                            Updated an application to be security compliant by fetching previously hard-coded credentials from an API.'
                            />
                        <ExpCardItem
                            src={bluehost}
                            text="SWE Intern"
                            label="Bluehost"
                            link="https://www.bluehost.com"
                            description="Automated a 10 hour per month process of repetitive work by creating a series of APIs.
                            Increased code coverage by 10% by writing unit tests for and refactoring legacy code."
                            />
                        <ExpCardItem
                            src={c1}
                            text="SWE Intern"
                            label="Capital One"
                            link="https://www.capitalone.com"
                            description='Identified 12 insecure AWS resources by building a solution to auto-scan resources and to then alert the owners.
                            Saved time for 4500 employees, within one year, by identifying an undocumented intricate process for an internal CI/CD tool and writing documentation for it.'
                            />
                        <ExpCardItem
                            src={byu}
                            text="Monitoring Student SWE"
                            label="BYU OIT"
                            link="https://oit.byu.edu"
                            description="
                            Saved 4 hours a week by allowing managers to directly update on-call schedules instead of the Monitoring Team.
                            Led a team of 2 for creation of screens."
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpCards
