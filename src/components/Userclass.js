import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: 100000,
    };
  }
  render() {
    const { Name, Location, Salary } = this.props;
    const { salary } = this.state;
    return (
      <div className="aboutcard">
        <h3>Name : {Name}</h3>
        <h3> Location: {Location}</h3>
        <h3> salary : Rs {salary + "  per month"}</h3>

        <button
          onClick={() => {
            this.setState({
              salary: this.state.salary + 0.2 * this.state.salary,
            });
          }}
        >
          click to increase
        </button>
      </div>
    );
  }
}
export default UserClass;
