import React, { Fragment } from "react";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom,
  handleClose,
  handleOpen,
  cryptoCurrency,
  open,
  handleChange
}) => (
    <Fragment>
      <InputLabel shrink htmlFor="demo-controlled-open-select">Crypto currency</InputLabel>
      <br />
      <Select
        errorText={touched && error}
        {...input}
        // eslint-disable-next-line react/no-children-prop
        children={children}
        {...custom}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={cryptoCurrency}
        onChange={handleChange}
        inputProps={{
          name: "cryptoCurrency",
          id: "demo-controlled-open-select"
        }} />
    </Fragment>);

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

const renderNumberField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      type="number"
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
      InputLabelProps={{
        shrink: true
      }}
    />
  );

const AddInvestmentForm = ({
  classes,
  handleSubmit,
  pristine,
  reset,
  submitting
}) => {
  const [cryptoCurrency, setCryptoCurrency] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setCryptoCurrency(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Create investment</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Field
                name="name"
                component={renderTextField}
                label="Investment name"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Field
                name="date"
                component={renderDateTimeField}
                label="Investment date"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Field
                name="value"
                component={renderNumberField}
                label="Value in USD $"
              />
            </GridItem>
            <GridItem>
              <Field
                xs={12}
                sm={12}
                md={3}
                name="cryptocurrency"
                component={renderSelectField}
                handleClose={handleClose}
                handleOpen={handleOpen}
                cryptoCurrency={cryptoCurrency}
                open={open}
                handleChange={handleChange}
              >
                <MenuItem value="BTC"> Bitcoin	</MenuItem>
                <MenuItem value="ETH"> Ethereum	</MenuItem>
                <MenuItem value="XRP">XRP</MenuItem>
                <MenuItem value="LTC"> Litecoin	</MenuItem>
                <MenuItem value="BCH">Bitcoin Cash</MenuItem>
                <MenuItem value="EOS">EOS</MenuItem>
              </Field>
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
  form: "addInvestmentForm"
})(AddInvestmentForm);
