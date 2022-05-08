import React from 'react';
import {Container, TextField, Button, Grid} from '@mui/material';
import {Form, Formik} from 'formik';
import {createInvitation} from '../services/invitation.service';

function NewInvitationForm({onSubmit}) {
  const submit = (values) => {
    createInvitation(values.name, values.message, values.email, values.phone, values.guestCount).then(() => {
      onSubmit();
    }).catch((error) => console.error(error));
  };
  return (
    <Container style={{margin: '1rem'}}>
      <Formik
        initialValues={{
          name: '',
          message: '',
          email: '',
          phone: '',
          guestCount: 0
        }}
        onSubmit={submit}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <TextField
                  {...formik.getFieldProps('name')}
                  label="Invitation Name"
                  variant="outlined"
                  style={{width: '90%'}}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  {...formik.getFieldProps('message')}
                  label="Invitation Message"
                  variant="outlined"
                  style={{width: '90%'}}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  type="number"
                  {...formik.getFieldProps('guestCount')}
                  label="Guest Count"
                  variant="outlined"
                  style={{width: '90%'}}
                />
              </Grid>

              <Grid item md={8} xs={12}>
                <TextField
                  {...formik.getFieldProps('email')}
                  label="Email"
                  variant="outlined"
                  style={{width: '90%'}}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  type="text"
                  {...formik.getFieldProps('phone')}
                  label="Phone Number"
                  variant="outlined"
                  style={{width: '90%'}}
                />
              </Grid>

              <Grid item md={8} xs={12}/>
              <Grid item md={4} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{margin: '.5rem 0', width: '90%'}}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default NewInvitationForm;
