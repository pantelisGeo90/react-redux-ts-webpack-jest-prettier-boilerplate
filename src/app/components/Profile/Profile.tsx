import * as React from 'react';
import { Profile } from 'app/typings';
import { ProfileActions } from 'app/actions/profile';
import { RootState } from 'app/reducers';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'app/utils';
import { Button, Spinner, Jumbotron, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

class Profile extends React.Component<Profile.Props, Profile.State> {
  constructor(props: Profile.Props, context?: any) {
    super(props, context);
    this.state = { isSaving: false, isLoading: true };
  }

  componentWillMount() {
    const {
      actions: { loadingProfile, loadedProfile }
    } = this.props;
    loadingProfile();
    setTimeout(() => {
      loadedProfile({
        id: 1,
        username: 'pantelas',
        age: 21,
        dob: new Date()
      });
    }, 1000);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 1000);
  }

  saveChanges = () => {
    const {
      actions: { saveProfile, savedProfile },
      profile
    } = this.props;

    saveProfile(profile);

    setTimeout(() => {
      savedProfile();
    }, 700);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      // profile,
      actions: { changeProfile }
    } = this.props;
    changeProfile({ [event.currentTarget.name]: event.currentTarget.value } as any);
  };

  render() {
    const {
      profilePage: { isLoading, isSaving },
      profile
    } = this.props;

    return (
      <Jumbotron>
        <h1>Profile</h1>
        <p>Edit your profile details</p>
        <Form>
          <FormGroup row>
            <Label for="username" sm={2}>
              {isLoading ? <Skeleton /> : `Username`}
            </Label>
            <Col sm={10}>
              {isLoading ? (
                <Skeleton height={37} />
              ) : (
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={profile.username}
                  onChange={this.handleChange}
                  disabled={isSaving}
                />
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" sm={2}>
              {isLoading ? <Skeleton /> : `Age`}
            </Label>
            <Col sm={10}>
              {isLoading ? (
                <Skeleton height={37} />
              ) : (
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="age"
                  onChange={this.handleChange}
                  value={profile.age}
                  disabled={isSaving}
                />
              )}
            </Col>
          </FormGroup>
          {isLoading ? (
            <Skeleton width={75} height={47} />
          ) : (
            <Button
              className={'with-loading'}
              size="lg"
              color="success"
              onClick={this.saveChanges}
              disabled={isSaving}
              type="submit"
            >
              {isSaving && (
                <div>
                  <Spinner size="sm" color="secondary" />
                </div>
              )}
              <span>Save</span>
            </Button>
          )}
        </Form>
        {/* )} */}
      </Jumbotron>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    profile: state.profile,
    profilePage: state.profilePage
  };
}

function matchDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(omit(ProfileActions, 'Type'), dispatch)
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Profile);
