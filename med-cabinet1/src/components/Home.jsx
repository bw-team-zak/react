import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  const { userInfo } = props;
  const Recs = () => {
    /*
    A MAP OPERATION TO BUILD EACH RECOMMENDATION CARD 
    FROM THE DATA PASSED INTO PROPS
    */

    return [
      <div>
        <p>
          filler data <br></br>
          card
        </p>
      </div>,
      <div>
        <p>
          filler data <br></br>
          card
        </p>
      </div>,
      <div>
        <p>
          filler data <br></br>
          card
        </p>
      </div>,
      <div>
        <p>
          filler data <br></br>
          card
        </p>
      </div>,
      <div>
        <p>
          filler data <br></br>
          card
        </p>
      </div>,
    ];
  };

  return (
    <div className="homeWrapper">
      <div className="homeLeft">
        <div className="homeUser">
          <p>USER: {userInfo.username}</p>
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
        <Recs></Recs>
      </div>
    </div>
  );
};
const mSTP = (state) => {
  console.log(state);
  return {
    userInfo: state.loginReducer.userInfo,
  };
};

export default connect(mSTP, {})(Home);
