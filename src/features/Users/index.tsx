import React, { Component } from "react";
import { observer } from "mobx-react";
import { UsersStore } from "./store";
import { UsersView } from "./view";

@observer
class Users extends Component<{}, {}> {
  store: UsersStore;

  constructor(props: any) {
    super(props);

    this.store = new UsersStore();
  }

  render() {
    return (
      <UsersView
        isLoading={this.store.isLoading}
        usersList={this.store.usersList}
      />
    );
  }
}

export default Users;
export { Users };
