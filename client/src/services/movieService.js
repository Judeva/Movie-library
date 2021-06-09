import 'react-toastify/dist/ReactToastify.css'

export const getAll = () => {
    return fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getSearched = (searchInput) => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getOne = (id) => {
    console.log(id);
    return fetch('http://api.tvmaze.com/shows/' + id)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};


export const addToFavorites = (username, userData) => {
    return fetch(`http://localhost:5000/users/${username}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}


