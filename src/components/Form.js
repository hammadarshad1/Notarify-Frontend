import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const Form = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: theme.spacing(8, 20),
    },
    textField: {
      margin: theme.spacing(1),
      width: "450px",
    },
    text: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      padding: "10px",
    },
    radio: {
      padding: "0px",
    },
  }));

  const submit = async (e) => {
    e.preventDefault();
    const {
      name,
      dob,
      country,
      vat_number,
      address,
      city,
      doc,
      released_date,
      expiry_date,
      capacity_resistance,
      commerce_registeration_number,
      office_add,
      office_town,
      office_state,
    } = e.target;
    const data = {
      name: name.value,
      dob: dob.value,
      country: country.value,
      vat_number: vat_number.value,
      address: address.value,
      city: city.value,
      doc: doc.value,
      released_date: released_date.value,
      expiry_date: expiry_date.value,
      capacity_resistance: capacity_resistance.value,
      commerce_registeration_number: commerce_registeration_number.value,
      office_add: office_add.value,
      office_town: office_town.value,
      office_state: office_state.value,
    };

    try {
      axios({
        url: "https://notarify.herokuapp.com",
        method: "post",
        data,
        responseType: "blob", // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "contract.pdf");
        document.body.appendChild(link);
        link.click();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Dear MIT SIM S.p.A.
        </Typography>

        <form onSubmit={submit}>
          <TextField
            name="name"
            required
            label="The undersigned (surname and name)"
            className={classes.textField}
          />
          <TextField
            name="dob"
            type="date"
            required
            InputLabelProps={{
              shrink: true,
            }}
            label="Born in"
            className={classes.textField}
          />
          <TextField
            name="country"
            label="citizenship"
            required
            className={classes.textField}
          />
          <TextField
            name="vat_number"
            label="Tax Code / VAT number"
            className={classes.textField}
          />
          <TextField
            name="address"
            required
            label="Resident in (address, house number)"
            className={classes.textField}
          />
          <TextField
            name="city"
            required
            label="(Citỳ - ZIP - Province)"
            className={classes.textField}
          />
          <TextField
            name="doc"
            required
            label="Identification document (type / no.)"
            className={classes.textField}
          />
          <TextField
            name="released_date"
            type="date"
            required
            InputLabelProps={{
              shrink: true,
            }}
            label="Released by"
            className={classes.textField}
          />
          <TextField
            name="expiry_date"
            required
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Expiration"
            className={classes.textField}
          />
          <TextField
            required
            name="capacity_resistance"
            label="On his own, as a natural person"
            className={classes.textField}
          />
          <TextField
            required
            name="commerce_registeration_number"
            label="Chamber of Commerce registration number"
            className={classes.textField}
          />

          <TextField
            required
            name="office_add"
            label="Registered office (Street - civic number)"
            className={classes.textField}
          />
          <TextField
            required
            name="office_town"
            label="(Town - Postcode - Province)"
            className={classes.textField}
          />
          <TextField
            required
            name="office_state"
            label="State"
            className={classes.textField}
          />

          {/* <div className={classes.text}>
          <Typography variant="p" component="h3">
            (Hereinafter the "Company")
          </Typography>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            <strong>(A) </strong>Declares for himself and for his immediate
            family members that, at the date of this declaration and for the
            purposes of the internal evaluation process of the SIM in the matter
            of conflict of interest and transactions with related parties
          </Typography>
          <div className={classes.radio}>
            <RadioOptions optionA="Yes" optionB="No" />
          </div>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            A Relevant Person and / or Person having a direct or indirect
            control link with the SIM, in the organization of the same or in the
            performance of its production process (eg. outsourcer, consultant,
            financial counterpart, etc.)
          </Typography>
          <div className={classes.radio}>
            <RadioOptions optionA="Fit" optionB="Do not fit" />
            </div>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            In the definition of "Related Party" of the SIM
          </Typography>
          <div className={classes.radio}>
            <RadioOptions optionA="Exist" optionB="Do not exist" />
            </div>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            Relevant business relationships of a financial, operational,
            contractual, labor or other nature with the SIM, the Relevant
            Persons and / or Person having a direct or indirect control link
            with the SIM, and precisely (specify):
          </Typography>
          <div style={{padding: '0px', margin:'auto'}}>
            <TextField multiline className={classes.textField}></TextField>
          </div>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            The value of the transaction / relationship is as follows: [data to
            be provided always and compulsorily]
            <TextField multiline className={classes.textField}></TextField>
          </Typography>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            (Compare proposal letter of appointment)
            <TextField multiline className={classes.textField}></TextField>
          </Typography>
          </div>

          <div className={classes.text}>
          <Typography variant="p">
            <strong>(B) </strong>In order to better clarify existing
            relationships and positions, attach to this document the following
            documents (specify), in addition to the certificate of incorporation
            in the case of a person with legal personality:
            <TextField multiline className={classes.textField}></TextField>
          </Typography>
          </div> */}
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
