import React from 'react'
import MtnCardItem from './MtnCardItem'
import './MtnCards.css'
import capital_reef from "../images/Capital_reef.png";
import yellowstone from "../images/yellowstone.jpg";
import basin from "../images/Great_basin.png";
import tetons from "../images/grandTeton.jpg";
import zion from "../images/zions.jpg";
import gateway from "../images/gateway.png";
import gif from "../images/9parks12days.gif";

function MtnCards() {

    return (
        <div className="mtn-cards">
            <h1 className="mtn-header" id="mountains">National Parks</h1>
            <h3 className="mtn-desc" id="mtn-desc">My wife and I have a goal to visit all the National Parks in the US these are some of the ones we've gone to so far!</h3>
            <div className="mtn-cards-container">
                <div className="mtn-cards-wrapper">
                    <ul className="mtn-cards-items">
                        <MtnCardItem
                            src={gateway}
                            text="Gateway Arch"
                            label="Gateway Arch"
                            description="
                                Gateway Arch in September 2021"
                            />
                        <MtnCardItem
                            src={gif}
                            text="9 Parks 12 Days"
                            label="9_Parks_12_Days"
                            description="Rented a sprinter van and went to 9 parks in 12 days in August 2021"
                            />
                        <MtnCardItem
                            src={zion}
                            text="Zion"
                            label="Angels Landing"
                            description="End of Angels Landing Hike in Febuary 2021"
                            />
                    </ul>
                    <ul className="mtn-cards-items">
                        <MtnCardItem
                            src={basin}
                            text="Great Basin"
                            label="Great Basin"
                            description='Summit of Wheeler Peak in September 2020'
                            />
                        <MtnCardItem
                            src={tetons}
                            text="Grand Tetons"
                            label="Grand Tetons"
                            description="
                                Picture of the Grand Tetons in August 2020"
                            />
                        <MtnCardItem
                            src={yellowstone}
                            text="Yellowstone"
                            label="Grand Canyon of Yellowstone"
                            description="Grand Canyon of Yellowstone in August 2020"
                            />
                        <MtnCardItem
                            src={capital_reef}
                            text="Capital Reef"
                            label="Capital Reef"
                            description='Small Outlook over Capital Reef in May 2020'
                            />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MtnCards
