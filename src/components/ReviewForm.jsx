import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css"

const ReviewForm = () => {
  return (
    <div className="review_form">
      <div className="form_control score_container">
        <label className="radio_container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill />
          <p>Unsatisfied</p>
        </label>
        <label className="radio_container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill />
          <p>Could be Better</p>
        </label>
        <label className="radio_container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill />
          <p>Satisfied</p>
        </label>
        <label className="radio_container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <p>Very satisfied</p>
        </label>
      </div>
      <div className="form_control">
        <label htmlFor="comment">Comment:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Tell us about your experience with the product..."
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
