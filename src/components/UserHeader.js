import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component {

  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }

}

const mapStateToProps = ({usersList}, ownProps) => {
  const user = usersList.users.find(user => user.id === ownProps.userId);
  return {user};
}


export default connect(mapStateToProps)(UserHeader);
