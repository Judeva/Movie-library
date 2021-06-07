export const getAllUsers = () => {
    return fetch('http://localhost:5000/users')
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};


export const getOneUser = (username) => {
    console.log(username);
    return fetch(`http://localhost:5000/users/${username}`)
        .then(res =>res.json())
        .catch(err => console.log('Handled error:' + err));
};