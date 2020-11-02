import React from "react";
import { observer } from "mobx-react";
import { UsersStore } from "./store";

export const UsersView = observer(
  ({ isLoading, usersList }: Pick<UsersStore, "isLoading" | "usersList">) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!usersList.length) {
      return <div>No data.</div>;
    }

    return (
      <ul>
        {usersList.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  },
);
