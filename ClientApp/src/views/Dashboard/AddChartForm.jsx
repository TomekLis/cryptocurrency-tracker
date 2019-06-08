import React from "react";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";

// const required = value => (value ? undefined : "Required");

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDateTimeField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type="date"
    label={label}
    errorText={touched && error}
    {...input}
    {...custom}
    InputLabelProps={{
      shrink: true
    }}
  />
);

const AddChartForm = ({
  classes,
  handleSubmit,
  pristine,
  reset,
  submitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Add chart</h4>
          <p className={classes.cardCategoryWhite}>Select</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <Field
                // validate={[required]}
                name="ChartName"
                component={renderTextField}
                label="Chart name"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Field
                name="StartDate"
                // validate={[required]}
                component={renderDateTimeField}
                label="Start date"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Field
                // validate={[required]}
                name="EndDate"
                component={renderDateTimeField}
                label="End date"
              />
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <Button type="submit" color="info" disabled={pristine || submitting}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "createChart"
})(AddChartForm);
