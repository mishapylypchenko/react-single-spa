import { observable, makeObservable, action } from "mobx";

interface User {
  name: string;
}

class UsersStore {
  isLoading: boolean = false;
  usersList: User[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      usersList: observable,
    });

    this.setUsers();
  }

  @action.bound
  async setUsers() {
    this.isLoading = true;

    this.usersList = await this.fetchUsers();

    this.isLoading = false;
  }

  async fetchUsers() {
    console.warn("Fetch Data");
    const response = await fetch("https://swapi.dev/api/people/?page=1");
    const { results: users } = await response.json();

    return users;
  }
}

export { UsersStore };
export default UsersStore;
