import * as React from 'react';
import { Profile } from 'app/typings';

class Profile extends React.Component<Profile.Props, Profile.State> {
  constructor(props: Profile.Props, context?: any) {
    super(props, context);
    this.state = { isSaving: false, isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  saveChanges = () => {
    this.setState({ isSaving: false });
    setTimeout(() => {
      this.setState({ isSaving: false });
    }, 700);
  };

  render() {
    const { isLoading } = this.state;
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
            <input placeholder="username" />
            <br />
            Address:
            <input placeholder="address" />
            <br />
            <br />
            <input type="button" value="Save" onClick={this.saveChanges} />
          </div>
        )}
      </>
    );
  }
}

export default Profile;
