import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, CustomButton } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Zahid"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "name", value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="+55-555-5555555"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <CustomButton>Add Employee</CustomButton>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
