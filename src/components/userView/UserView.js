import React, { PureComponent } from 'react';

import { getComponent } from '../../helpers/helpers';

class UserView extends PureComponent {

  render() {
    const Component = getComponent(this.props.component);
    return (
      <Component
        handleLogOut={this.props.handleLogOut}
        id={this.props.id}
      />
    )
  }
}

export default UserView;
