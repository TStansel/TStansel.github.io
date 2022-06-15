import React from 'react'
import ExpCardItem from './ExpCardItem'
import './ExpCards.css'
import byu from "../images/byu-icon.png";
import c1 from "../images/CapitalOne-icon.png";
import bluehost from "../images/Bluehost-icon.png";
import taxbit from "../images/taxbit-icon.png";
import aws from "../images/aws.jpg";

function ExpCards() {

    return (
        <div className="exp-cards">
            <h1 className="exp-header" id="experience">Where I've Worked</h1>
            <div className="exp-cards-container">
                <div className="exp-cards-wrapper">
                <ul className="exp-cards-items">
                        <ExpCardItem
                            src={aws}
                            text="SDE Intern"
                            label="AWS"
                            link="https://aws.amazon.com"
                            description="Current"
                            />
                        <ExpCardItem
                            src={taxbit}
                            text="SWE Intern"
                            label="Taxbit"
                            link="https://taxbit.com"
                            description="Saved 15 hours per incident by architecting and creating a tool to extract execution data from AWS step functions and make the data queryable using a no code solution.
                            Increased reliability and maintainability by writing dozens of unit, integration, and property tests."
                            />
                        <ExpCardItem
                            src={c1}
                            text="SWE Intern"
                            label="Capital One"
                            link="https://www.capitalone.com"
                            description='Using Python and AWS, updated one project to have to up to date secruity mandates in place and then
                            pulled in several new data fields into an API that handles transaction data for credit cards.'
                            />
                    </ul>
                    <ul className="exp-cards-items">
                        <ExpCardItem
                            src={bluehost}
                            text="SWE Intern"
                            label="Bluehost"
                            link="https://www.bluehost.com"
                            description="Created several API endpoints in Perl and Python to implement data from 3rd party sources 
                            and to report on a variety of metrics for customer notifications. Also updated legacy Perl code and wrote
                            documentation and unit tests for updates."
                            />
                        <ExpCardItem
                            src={c1}
                            text="SWE Intern"
                            label="Capital One"
                            link="https://www.capitalone.com"
                            description='Using Python and AWS Lambdas, added on to an existing internal
                            tool to allow for teams to easily identify any resources that were insecure or out of date.
                            Provided immediate results by identifying insecure resources teams did not know were insecure.'
                            />
                        <ExpCardItem
                            src={byu}
                            text="Student SWE"
                            label="BYU OIT"
                            link="https://oit.byu.edu"
                            description="
                                Using React-Native and AWS added onto an existing internal mobile application to allow managers
                                to efficiently manage their teams and schedules. Created screens saved time and resources for the
                                team that previously managed all schedules."
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpCards
