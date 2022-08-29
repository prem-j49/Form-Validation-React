import React from "react";

import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.userData.map((user, index) => {
                    return (
                        <li key={user.id}>{user.name} ({user.age} Years)</li>
                    );
                })}
            </ul>
        </Card>

    );
}
export default UserList;