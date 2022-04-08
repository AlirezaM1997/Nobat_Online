import React, { useState, useEffect } from "react";
import { css, styled, setup } from "goober";
import { useAllState } from "../Provider";

setup(React.createElement);

const Ol = styled("ol")`
  margin: 0;
  padding: 0 2.2rem 4rem 2.2rem;
  list-style-type: none;
  text-align: center;
`;
const Li = styled("li")`
  display: inline-block;
  text-align: center;
  line-height: 4.8rem;
  padding: 0 0 0 4rem;
  cursor: pointer;

  color: silver;
  border-bottom: 2px solid silver;

  &:hover,
  &:before {
    color: #0fa0ce;
  }

  &:before {
    position: relative;
    float: left;
    left: 50%;
    width: 1.3em;
    line-height: 1.4em;
    border-radius: 50%;
    bottom: -3.7rem;
    font-size: 1.5rem;
  }
`;
const Todo = css`
  &:before {
    content: "\u039F";
    color: silver;
    background-color: white;
  }
`;
const Doing = css`
  &:before {
    content: "\u2022";
    color: white;
    background-color: #33c3f0;
  }
`;
const Done = css`
  &:before {
    content: "\u2713";
    color: white;
    background-color: #33c3f0;
  }
`;

const getStep = (defaultIndex, newIndex, length) => {
  if (newIndex <= length) {
    return newIndex;
  }
  return defaultIndex;
};

const getTopNavStyles = (indx, length) => {
  const styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return styles;
};

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
    };
  }
};

export default function MultiStep(props) {
  const { activeComponentClassName, inactiveComponentClassName } = props;
  const showNav =
    typeof props.showNavigation === "undefined" ? true : props.showNavigation;

  const [activeStep] = useState(
    getStep(0, props.activeStep, props.steps.length)
  );
  const [stylesState, setStyles] = useState(
    getTopNavStyles(activeStep, props.steps.length)
  );
  const [compState, setComp] = useState(activeStep);
  const [buttonsState, setButtons] = useState(
    getButtonsState(activeStep, props.steps.length)
  );

  const { selectedTime } = useAllState("");
  const { setSelectedTime } = useAllState();

  useEffect(() => {
    setStepState(props.activeStep);
  }, [props.activeStep]);

  const setStepState = (indx) => {
    setStyles(getTopNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  };

  const next = () => setStepState(compState + 1);

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const handleOnClick = (evt) => {
    if (
      evt.currentTarget.value === props.steps.length - 1 &&
      compState === props.steps.length - 1
    ) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };

  const renderSteps = () =>
    props.steps.map((s, i) => {
      if (stylesState[i] === "todo") {
        return (
          <Li className={Todo} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      } else if (stylesState[i] === "doing") {
        return (
          <Li className={Doing} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      } else {
        return (
          <Li className={Done} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      }
    });

  const renderNav = (show) =>
    show && (
      <div className="d-flex justify-content-center mt-3">
        <button
          style={
            buttonsState.showPreviousBtn ? props.prevStyle : { display: "none" }
          }
          onClick={previous}
          className="bg-warning text-dark m-2 rounded border-0 px-4 py-2"
        >
          مرحله قبل
        </button>

        <button
          style={
            buttonsState.showNextBtn ? props.nextStyle : { display: "none" }
          }
          onClick={next}
          className={`${
            selectedTime === ""
              ? "bg-secondary bg-gradient text-white-50"
              : "bg-success"
          } text-white m-2 rounded border-0 px-4 py-2`}
          disabled={selectedTime === "" ? true : false}
        >
          مرحله بعد
        </button>
      </div>
    );

  return (
    <div>
      <Ol>{renderSteps()}</Ol>
      {inactiveComponentClassName ? (
        props.steps.map((step, index) => {
          const className =
            index === compState
              ? activeComponentClassName
              : inactiveComponentClassName;
          return (
            <div className={className} key={index}>
              {step.component}
            </div>
          );
        })
      ) : (
        <div>{props.steps[compState].component}</div>
      )}
      <div>{renderNav(showNav)}</div>
    </div>
  );
}
