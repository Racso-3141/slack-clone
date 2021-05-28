import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error=>{
                alert(error.message);
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src = "https://static.surveysparrow.com/site/assets/integrations/inner/slack.png"></img>
                <h1>Sign in to Slack-clone</h1>
                <p>https://slack-clone-47a68.web.app/</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
