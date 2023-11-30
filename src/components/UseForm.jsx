const UseForm = () => {
  return (
    <div>
      <div className="form_control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form_control">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
      </div>
    </div>
  );
};

export default UseForm;
