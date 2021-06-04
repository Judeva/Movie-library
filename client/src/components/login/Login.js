import { useState } from "react";
import { auth } from '../../firebase/firebase';
import { ToastContainer, toast } from "react-toastify";
// import { validateAuthInput } from "../../services/authService";
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({
    history
}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginSubmitHandler = (e) => {

        e.preventDefault();

        // validateAuthInput(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then(userCredentials => {
                console.log(userCredentials);
                history.push('/')
            }).catch(err => {
                if (err) {
                    toast.error(err.message)
                }
            });
    }

    return (
        <div className='login2'>
            <h2 className="display-2">LOGIN</h2>
            <ToastContainer />
            <form onSubmit={onLoginSubmitHandler}>
                <label
                    htmlFor="Username"
                >Email</label>
                <input
                    name="username"
                    type='email'
                    placeholder="user@example.com"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="Password">Password</label>
                <input
                    id="login-input"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit"
                    id="login-submit-button"
                />
            </form>
        </div>
    );
}


export default Login;