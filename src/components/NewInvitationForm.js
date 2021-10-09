import React from 'react';
import {Container, TextField, Button} from "@mui/material";
import {Form, Formik} from "formik";
import {createInvitation} from "../services/invitation.service";

function NewInvitationForm({onSubmit}) {
    const submit = (values) => {
        createInvitation(values.name, values.guestCount).then(() => {
            onSubmit()
        }).catch(error => console.error(error));
    }
    return (
        <Container style={{margin: "1rem"}}>
            <Formik
                initialValues={{
                    name: '',
                    guestCount: 0
                }}
                onSubmit={submit}
            >
                {formik => (
                    <Form>
                        <TextField
                            {...formik.getFieldProps('name')}
                            label="Invitation Name"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <TextField
                            type="number"
                            {...formik.getFieldProps('guestCount')}
                            label="Guest Count"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{margin: "1.5rem"}}
                        >
                            Add
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default NewInvitationForm;