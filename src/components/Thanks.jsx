import "./Thanks.css";

import { PropTypes } from "prop-types";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiFrownFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks_container">
      <h2>Almost there...</h2>
      <p>
        Your opinion is very important, soon, you will receive a 100% discount
        voucher for your next purchase
      </p>
      <p>To complete you review, click on the submit button below</p>
      <h3>Here is the sumarry of your reviews: {data.name}</h3>
      <p className="review_data">
        <span>Satisfaction with the product:</span>
        {emojiData[data.review]}
      </p>
      <p className="review_data">
        <span>Comment: </span>
        {data.comment}
      </p>
    </div>
  );
};

Thanks.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Thanks;
