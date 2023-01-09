import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    //THE REF
    //to make use of reference(ref) we add our ref to our react import after useState
    //then we store it in a variable. then add it to the inputs where its needed
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    //adding another usestate for managing the error
    const [error, setError] = useState();


    const AddUserHandler = (event) => {
        event.preventDefault();
        //we console the useRef
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = nameInputRef.current.value;
        //to make sure the code only execute when valid inputs are entered we make use of the
        //if statement
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a Valid name and age (non-empty values)'
            });
            return;
        }
        //if the age number is less than 1 it will not accept
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age(>0).',
            });
            return;
        }


        //we pass the onAddUser function from the App list to the AddUser list
        props.onAddUser(enteredUserName, enteredUserAge);
        //to reset inputs back to an empty input just set it to an empty string.
        //this will take place within the adduserhandler.
        //then we go to the form and set the values in the input value attribute.
        setEnteredUserName('');
        setEnteredAge('');
    }
    //to change userName you create a function then add it to the username input label.
    const changeUserName = (event) => {
        setEnteredUserName(event.target.value);
    };
    //to change age you create a function then add the function to the age input label.
    const changeAge = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }


    return (
        //we created a wrapper module so we can wrapper all our elements inside
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}

            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <h1>ATTENDANCE FORM</h1>
                    <label
                        htmlFor='username'>
                        Username
                    </label>

                    <input
                        id='username'
                        type='text'
                        value={enteredUserName}
                        onChange={changeUserName}
                        ref={nameInputRef}
                    />

                    <label
                        htmlFor='age'>
                        Age (year)
                    </label>

                    <input
                        id='age'
                        type='number'
                        value={enteredAge}
                        onChange={changeAge}
                        ref={ageInputRef}
                    />
                    <br />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;