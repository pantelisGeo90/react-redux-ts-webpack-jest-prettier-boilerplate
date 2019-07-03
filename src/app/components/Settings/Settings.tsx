import * as React from 'react';
import { Settings } from 'app/typings';
import { Jumbotron, Form, Button, FormGroup, Label, Spinner, Col, Input } from 'reactstrap';
import { Formik, Field, ErrorMessage, FieldProps } from 'formik';
// import Skeleton from 'react-loading-skeleton';

class Settings extends React.Component<Settings.Props, Settings.State> {
  constructor(props: Settings.Props, context?: any) {
    super(props, context);
    this.state = { isSaving: false, isLoading: true };
  }

  render() {
    return (
      <Jumbotron>
        <h1>Settings</h1>
        <p>Edit your app's settings</p>
        <Formik
          initialValues={{ websiteUrl: '', color: '' }}
          validate={(values) => {
            let errors = {};
            console.log(values);
            if (values.websiteUrl.trim() === '') {
              errors = { ...errors, websiteUrl: 'Required' };
            }

            if (values.color === '') {
              errors = { ...errors, color: 'Required' };
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);

            setTimeout(() => {
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="websiteUrl" sm={2}>
                  WebsiteUrl
                </Label>
                <Col sm={10}>
                  <Field
                    name="websiteUrl"
                    render={(options: FieldProps) => {
                      const {
                        field,
                        form: { isSubmitting }
                      } = options;
                      return (
                        <Input
                          type="text"
                          placeholder="website url"
                          id="websiteUrl"
                          {...field}
                          disabled={isSubmitting}
                        />
                      );
                    }}
                  />
                  <ErrorMessage name="websiteUrl" component="div" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="websiteUrl" sm={2}>
                  Choose option
                </Label>
                <Col sm={{ size: 10 }}>
                  <Field
                    component="select"
                    name="color"
                    render={(options: FieldProps) => {
                      return (
                        <Input type="select" {...options.field} id="colorSelect">
                          <option value="">- Please select -</option>
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue">Blue</option>
                        </Input>
                      );
                    }}
                  />
                  <ErrorMessage name="color" component="div" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button
                    className={'with-loading'}
                    size="lg"
                    color="success"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting && (
                      <div>
                        <Spinner size="sm" color="secondary" />
                      </div>
                    )}
                    <span>Save</span>
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Jumbotron>
    );
  }
}

export default Settings;
