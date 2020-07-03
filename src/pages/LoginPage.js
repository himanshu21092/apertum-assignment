import React, { useState } from 'react';
import { AuthService } from '../services/authService';
import { useHistory } from 'react-router-dom';
import Card from "../components/Card";
import Input from '../components/Input';
import Button from "../components/Button";

export function LoginPage() {
    const history = useHistory();
    const [formState, setFormState] = useState({
        accountId: "",
        pswd: ""
    })
    const [showError, setShowError] = useState(false);

    const changeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const loginSubmit = async (event) => {
        event.preventDefault();
        setShowError(false);
        const success = await AuthService.login(formState);
        if (success)
            history.push('/users');
        else
            setShowError(true);
    }


    return (
        <div className="is-fullpage is-content-centered login-root">
            <Card>
                <form autoComplete="off" onSubmit={loginSubmit}>
                    <h3>
                        Username
                    </h3>
                    <div>
                        <Input type="text" onChange={changeHandler} name="accountId" value={formState.accountId} />
                    </div>
                    <h3>
                        Password
                    </h3>
                    <div className="has-bottom-margin">
                        <Input type="password" onChange={changeHandler} name="pswd" value={formState.pswd} />
                    </div>
                    {
                        showError &&
                        <div className="has-bottom-margin is-error-font">
                            <h5>Invalid Username or Password</h5>
                        </div>
                    }
                    <div>
                        <Button label={"Submit"} />
                    </div>
                </form>
            </Card>
        </div>
    )
}