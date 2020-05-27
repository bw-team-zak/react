import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

export default function Questionnaire(props) {
  let {
    activeTab,
    setActiveTab,
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onSymptomsCheckboxChange,
    onRaceRadioChange,
    onFlavorCheckboxChange,
  } = props;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="quest">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Symptoms
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Prefrence
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Flavor
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <h3>Please select symptoms you may be suffering from :</h3>
          <Row>
            <label>
              pain
              <input
                type="checkbox"
                name="pain"
                checked={values.questionnaire.symptoms.pain}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              depression
              <input
                type="checkbox"
                name="depression"
                checked={values.questionnaire.symptoms.depression}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              insomnia
              <input
                type="checkbox"
                name="insomnia"
                checked={values.questionnaire.symptoms.insomnia}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
          </Row>
          <Row>
            <label>
              lack of appetite
              <input
                type="checkbox"
                name="lackOfAppetite"
                checked={values.questionnaire.symptoms.lackOfAppetite}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              nausea
              <input
                type="checkbox"
                name="nausea"
                checked={values.questionnaire.symptoms.nausea}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              fatigue
              <input
                type="checkbox"
                name="fatigue"
                checked={values.questionnaire.symptoms.fatigue}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
          </Row>
          <Row>
            <label>
              eye pressure
              <input
                type="checkbox"
                name="eyePressure"
                checked={values.questionnaire.symptoms.eyePressure}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              inflamation
              <input
                type="checkbox"
                name="inflamation"
                checked={values.questionnaire.symptoms.inflamation}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              seizures
              <input
                type="checkbox"
                name="seizures"
                checked={values.questionnaire.symptoms.seizures}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
          </Row>
          <Row>
            &nbsp; &nbsp;
            <label>
              stress
              <input
                type="checkbox"
                name="stress"
                checked={values.questionnaire.symptoms.stress}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              muscle spasms
              <input
                type="checkbox"
                name="muscleSpasm"
                checked={values.questionnaire.symptoms.muscleSpasm}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              other
              <input
                type="checkbox"
                name="other"
                checked={values.questionnaire.symptoms.other}
                onChange={onSymptomsCheckboxChange}
              />
            </label>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <h3>Please Select typical usage :</h3>
          <Row>
            <div>
              <label>
                {" "}
                Day or Night usage?
                <br />
                <label>
                  Day
                  <input
                    type="radio"
                    name="race1"
                    value="sativa"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Both
                  <input
                    type="radio"
                    name="race1"
                    value="hybrid"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Night
                  <input
                    type="radio"
                    name="race1"
                    value="indica"
                    onChange={onRaceRadioChange}
                  />
                </label>
              </label>
            </div>
          </Row>
          <Row>
            <div>
              <label>
                {" "}
                Concentration or Relaxation?
                <br />
                <label>
                  Concentration
                  <input
                    type="radio"
                    name="race2"
                    value="sativa"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  In the Middle
                  <input
                    type="radio"
                    name="race2"
                    value="hybrid"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Relaxation
                  <input
                    type="radio"
                    name="race2"
                    value="indica"
                    onChange={onRaceRadioChange}
                  />
                </label>
              </label>
            </div>
          </Row>
          <Row>
            <div>
              <label>
                {" "}
                Alertness or Sedation?
                <br />
                <label>
                  Alertness
                  <input
                    type="radio"
                    name="race3"
                    value="sativa"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  In the Middle
                  <input
                    type="radio"
                    name="race3"
                    value="hybrid"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Sedation
                  <input
                    type="radio"
                    name="race3"
                    value="indica"
                    onChange={onRaceRadioChange}
                  />
                </label>
              </label>
            </div>
          </Row>
          <Row>
            <div>
              <label>
                {" "}
                Mind or Body?
                <br />
                <label>
                  Mind
                  <input
                    type="radio"
                    name="race4"
                    value="sativa"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Both
                  <input
                    type="radio"
                    name="race4"
                    value="hybrid"
                    onChange={onRaceRadioChange}
                  />
                </label>
                &nbsp; &nbsp;
                <label>
                  Body
                  <input
                    type="radio"
                    name="race4"
                    value="indica"
                    onChange={onRaceRadioChange}
                  />
                </label>
              </label>
            </div>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <h4>
            Please select Natural flavor profiles you may be interested in :
          </h4>
          <Row>
            <label>
              earthy
              <input
                type="checkbox"
                name="earthy"
                checked={values.questionnaire.flavor.earthy}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              spicy
              <input
                type="checkbox"
                name="spicy"
                checked={values.questionnaire.flavor.spicy}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              herbal
              <input
                type="checkbox"
                name="herbal"
                checked={values.questionnaire.flavor.herbal}
                onChange={onFlavorCheckboxChange}
              />
            </label>
          </Row>
          <Row>
            <label>
              sweet
              <input
                type="checkbox"
                name="sweet"
                checked={values.questionnaire.flavor.sweet}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              piney
              <input
                type="checkbox"
                name="pine"
                checked={values.questionnaire.flavor.pine}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              pungent
              <input
                type="checkbox"
                name="pungent"
                checked={values.questionnaire.flavor.pungent}
                onChange={onFlavorCheckboxChange}
              />
            </label>
          </Row>
          <Row>
            <label>
              minty
              <input
                type="checkbox"
                name="minty"
                checked={values.questionnaire.flavor.minty}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              citrus
              <input
                type="checkbox"
                name="citrus"
                checked={values.questionnaire.flavor.citrus}
                onChange={onFlavorCheckboxChange}
              />
            </label>
            &nbsp; &nbsp;
            <label>
              nutty
              <input
                type="checkbox"
                name="nutty"
                checked={values.questionnaire.flavor.nutty}
                onChange={onFlavorCheckboxChange}
              />
            </label>
          </Row>
        </TabPane>
      </TabContent>
      <Button>Submit</Button>
    </div>
  );
}
