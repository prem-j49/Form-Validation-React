import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const NameHandler = (event) => {
        setName(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
        if (event.target.value.length <= 0) {
        } else {
        }
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserData = {
            name: name,
            age: age
        }
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age(non-empty values)",
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid age (>0)",
            });
            return;
        }
        setName('');
        setAge('');
        props.onAddUser(name, age);
        console.log(enteredUserData);
    }
    const onClearError = () => {
        setError();
        setName('');
        setAge('');
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClear={onClearError} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Name</label>
                    <input
                        id="username"
                        type="text"
                        value={name}
                        onChange={NameHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={age}
                        onChange={ageHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>

    );
}
export default AddUser;