import React, { Component, Fragment } from "react";
import User from "./User";

const PAGE = "page=";
const COUNT = "count=";

export default class UsersBlock extends Component {
  state = {
    page: 1,
    countUsers: 6,
    users: [],
    activeLink: true,
  };

  // функция перезагрузки пользователей при регистрации
  componentWillReceiveProps(nextProps) {
    console.log(3);

    if (nextProps.isReloadUsers) {
      this.reloadUsers(nextProps);
    }

    return true;
  }

  reloadUsers = (nextProps) => {
    const { reloadUsers, isReloadUsers } = nextProps;
    const { countUsers } = this.state;

    if (isReloadUsers) {
      this.setState({
        users: [],
        page: 1,
      });

      this.addUsersFromButton(1, countUsers);
      reloadUsers();
    }
  };

  componentDidMount() {
    const { page, countUsers } = this.state;
    this.addUsersFromButton(page, countUsers);
  }

  fetchData = (page, countUsers) => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?${PAGE}${page}&${COUNT}${countUsers}`
    )
      .then((responce) => responce.json())
      .then((data) => this.addUsers(data))
      .catch((error) => error);
  };

  addUsers = (data) => {
    if (data.success) {
      this.setState(({ users, page }) => {
        return {
          users: [...users, ...data.users],
          page: page + 1,
        };
      });
    } else {
      this.setState(({ activeLink }) => ({
        activeLink: !activeLink,
      }));
    }
    return data;
  };

  addUsersFromButton = (page, countUsers) => {
    this.fetchData(page, countUsers);
  };

  render() {
    const { activeLink, users, page, countUsers } = this.state;
    const { isDisabledButton } = this.props;

    return (
      <Fragment>
        <div className="users_block">
          {users.map(({ name, phone, email, position, photo, id }) => (
            <User
              name={name}
              phone={phone}
              email={email}
              position={position}
              photo={photo}
              key={id}
            />
          ))}
        </div>

        {activeLink && (
          <button
            className={isDisabledButton ? "disabledLink" : "primaryLink"}
            onClick={() => {
              this.addUsersFromButton(page, countUsers);
            }}
          >
            <span>Show more</span>
          </button>
        )}
      </Fragment>
    );
  }
}
