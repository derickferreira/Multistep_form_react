import "./App.css";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import UseForm from "./components/UseForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import { useForm } from "./hooks/useForm";

import { useState } from "react";

function App() {
  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    {
      component: (
        <UseForm data={data} updateFieldHandler={updateFieldHandler} />
      ),
      key: "useForm",
    },
    {
      component: (
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />
      ),
      key: "reviewForm",
    },
    {
      component: <Thanks data={data} updateFieldHandler={updateFieldHandler} />,
      key: "thanks",
    },
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Leave Your Review</h2>
        <p>
          We are absolutely delighted with your purchase. Kindly utilize the
          form provided below to assess the product.
        </p>
      </div>
      <div className="form_container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>back</span>
              </button>
            )}
            {isLastStep ? (
              <button type="submit">
                <span>advance</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>send</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
