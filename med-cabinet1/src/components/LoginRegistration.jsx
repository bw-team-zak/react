import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Registration from "./Registration"
import Login from "./Login"


export default function LoginRegistration(props) {

    const {
        loginSubmit,
        onInputChange,
        onInputChangeRegistration,
        errors,
        disabled,
        disabled2,
        submitHandle,
        onCheckboxChange,
        activeTab,
        setActiveTab
    } = props

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }
    
    return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Register Now!
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Login
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Registration
                onInputChange={onInputChangeRegistration}
                errors={errors}
                disabled={disabled2}
                submitHandle={submitHandle}
                onCheckboxChange={onCheckboxChange}/>
            </TabPane>
            <TabPane tabId="2">
                <Login
                loginSubmit={loginSubmit}
                onInputChange={onInputChange}
                errors={errors}
                disabled={disabled}
                ></Login>
            </TabPane>
          </TabContent>
        </div>
      );
}
