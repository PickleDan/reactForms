import React from "react";

export default class MyForm extends React.Component {
  state = {
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    acceptRules: false,
    showForm: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showForm: false });
  };

  handleInput = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBack = e => {
    this.setState({ showForm: true });
  };

  handleAccept = e => {
    const current = this.state.acceptRules;
    this.setState({ acceptRules: !current });
  };

  render() {
    const {
      email,
      password,
      address,
      city,
      country,
      acceptRules,
      showForm
    } = this.state;
    const form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">
            Address
          </label>
          <textarea
            type="text"
            className="form-control"
            name="address"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={this.handleInput}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="inputCity"
              value={city}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">
              Country
            </label>
            <select
              id="inputCountry"
              name="country"
              className="form-control"
              value={country}
              onChange={this.handleInput}
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={acceptRules}
                onChange={this.handleAccept}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
    const table = (
      <div>
        <button type="button" onClick={this.handleBack}>
          Back
        </button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{acceptRules ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    const show = showForm ? form : table;
    return <>{show}</>;
  }
}
