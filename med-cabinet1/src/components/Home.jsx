import React from 'react'

export default function Home(props) {

    // const {} = props;
    const Recs = () => {

    /*
    A MAP OPERATION TO BUILD EACH RECOMMENDATION CARD 
    FROM THE DATA PASSED INTO PROPS
    */

        return [<div><p>filler data <br></br>
            card</p></div>
    //         , <div><p>filler data <br></br>
    // card</p></div>, <div><p>filler data <br></br>
    // card</p></div>, <div><p>filler data <br></br>
    // card</p></div>, <div><p>filler data <br></br>
    // card</p></div>
    ]
    }

    return (
        <div className="homeWrapper">
            <div className="homeLeft">
                <div className="homeUser">
                    <p>USER: current user</p>
                    <p>Date: todays date</p>
                    <p># of strains profiled</p>
                </div>
                <div className="column">
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
            </div>
            <div className="rec">
                <p className="yourRec">Your Recommendations :</p>
                {/* <Recs></Recs> */}
            </div>
        </div>
    )
}
