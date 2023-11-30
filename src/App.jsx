import "./App.css";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import UseForm from "./components/UseForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

import { useForm } from "./hooks/useForm";

function App() {
  const formComponents = [
    { component: <UseForm />, key: "useForm" },
    { component: <ReviewForm />, key: "reviewForm" },
    { component: <Thanks />, key: "thanks" },
  ];
  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

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
        <p>Steps</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>back</span>
            </button>
            <button type="submit">
              <span>advance</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
