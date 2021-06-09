import { useState } from "react";
import { auth } from '../../firebase/firebase';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({
    history
}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const onRegisterSubmitHandler = (e) => {

        e.preventDefault();

        if (password !== rePassword) {
            return toast.error('Passwords should match!')
        }
        const newUser = {
            username,
            password,
            favorites: [],
            notes: [],
            ratings: []
        }

        console.log(newUser);
        // Create user in firebase and auto login.
        auth.createUserWithEmailAndPassword(username, password)
            .then(userCredentials => {
                history.push('/')
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err);
            });

        //Create user in mongoDB
        axios.post('http://localhost:5000/users', newUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                toast.error(err.message);
            });
        history.push('/');
    }

    return (
        <div className='register'>
            <h2 className="display-2">REGISTER</h2>
            <ToastContainer />
            <form onSubmit={onRegisterSubmitHandler}>
                <label
                    htmlFor="Username"
                >E-mail</label>
                <input
                    name="username"
                    type='email'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="Password">Password</label>
                <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="Password">Repeat Password</label>
                <input
                    name='rePassword'
                    type="password"
                    required
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
                <input
                    type="submit"
                    id="register-submit-button"
                />
            </form>
        </div>
    );
}

export default Register;