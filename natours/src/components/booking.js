import React from "react";

class Booking extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputs: {
        // this block is non-alphabetical because Object.keys
        // is later used to maintain this order
        name: { placeholder: "full name", type: "text", val: "" },
        email: { placeholder: "email", type: "email", val: "" },
      }
    };
  }

  render () {
    const { email, name } = this.state.inputs;
    const inputs = [email, name];

    return (
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">
                    Start booking now
                  </h2>
                </div>

                {this.renderInputs()}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  handleInputChange = (key, value) => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [key]: {
          ...prevState.inputs[key],
          val: value
        }
      },
    }));
  };

  renderInputs = () => {
    const { inputs } = this.state;

    return Object.keys(inputs).map(key => {
      const { placeholder, type, val } = inputs[key];
      const id = placeholder.split(" ").join("-");
      const properText = placeholder.split(" ").map(str => {
        return str.length === 0
          ? str
          : str[0].toUpperCase() + str.substr(1)
      }).join(" ");

      return (
        <div className="form__group" key={id}>
          <input
            autoComplete="off"
            className="form__input"
            id={id}
            onChange={
              (event) => this.handleInputChange(key, event.target.value)
            }
            placeholder={properText}
            required={true}
            type={type}
            value={val}
          />

          <label htmlFor={id} className="form__label">
            {properText}
          </label>
        </div>
      );
    });
  };
};

export default Booking;
