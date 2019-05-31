import * as React from 'react';
import { Profile } from 'app/typings';
import { ProfileActions } from 'app/actions/profile';
// import { ProfileModel } from 'app/models';

class Profile extends React.Component<Profile.Props, Profile.State> {
  constructor(props: Profile.Props, context?: any) {
    super(props, context);
    this.state = {
      isSaving: false,
      isLoading: true,
      profileModel: {
        id: 0,
        username: ''
      }
    };
  }

  componentWillMount() {
    ProfileActions.loadProfile();

    setTimeout(() => {
      ProfileActions.loadedProfile();
      this.setState({ isLoading: false });
    }, 1000);
  }

  componentDidMount() {}

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { profileModel } = this.state;

    this.setState({
      profileModel: {
        ...profileModel,
        ...{ [e.currentTarget.name]: e.currentTarget.value }
      }
    });
  };

  handleSubmit = (e: any) => {
    const { profileModel } = this.state;
    e.preventDefault();
    ProfileActions.savingProfile(profileModel);
    this.setState({ isSaving: true });
    setTimeout(() => {
      this.setState({ isSaving: false });
      ProfileActions.savedProfile();
    }, 500);
    console.log('submitted form');
  };

  render() {
    const { isLoading, profileModel, isSaving } = this.state;
    return (
      <>
        <header>
          <h1>Profile</h1>
        </header>
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            Username:
            <input
              type="text"
              name="username"
              value={profileModel && profileModel.username}
              placeholder="username"
              onChange={this.handleChange}
              disabled={isSaving}
            />
            <br />
            Address:
            <input
              type="text"
              name="address"
              value={profileModel && profileModel.address}
              placeholder="address"
              onChange={this.handleChange}
              disabled={isSaving}
            />
            <br />
            <br />
            <input type="submit" value="Save" disabled={isSaving} />
          </form>
        )}
      </>
    );
  }
}

export default Profile;
