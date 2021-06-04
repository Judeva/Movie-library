import { useState } from "react";
import { auth } from '../../firebase/firebase'
import { ToastContainer, toast } from "react-toastify";
// import { validateAuthInput } from "../../services/authService";
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
        
    //  validateAuthInput(username, password);

        auth.createUserWithEmailAndPassword(username, password)
            .then(userCredentials => {
                history.push('/');
            }).catch(err => {
                toast.error(err.message)
                console.log(err);
            })
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