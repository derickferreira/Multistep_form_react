import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

// eslint-disable-next-line
const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Assessment</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Shipping</p>
      </div>
    </div>
  );
};

export default Steps;
