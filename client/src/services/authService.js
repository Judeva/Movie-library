export const createUser = (user) => {
    return fetch("http://localhost:5000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: user })
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}