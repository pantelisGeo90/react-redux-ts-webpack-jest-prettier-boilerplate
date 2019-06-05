import * as React from 'react';
import { Profile } from 'app/typings';
import { ProfileActions } from 'app/actions/profile';
import { RootState } from 'app/reducers';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'app/utils';
// import { ProfileModel } from 'app/models/ProfileModel';

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
      actions: { savingProfile, savedProfile }
    } = this.props;
    savingProfile();
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
      profilePage: { isLoading },
      profile
    } = this.props;
    return (
      <>
        <header>
          <h1>Profile</h1>
        </header>
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          <div>
            Username:
            <input
              placeholder="username"
              name="username"
              value={profile.username}
              onChange={this.handleChange}
            />
            <br />
            Age:
            <input placeholder="age" name="age" onChange={this.handleChange} value={profile.age} />
            <br />
            <br />
            <input type="button" value="Save" onClick={this.saveChanges} />
          </div>
        )}
      </>
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
