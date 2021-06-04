import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const getAll = () => {
    return fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getOne = (movieId) => {
    return fetch(`${'http://api.tvmaze.com/shows'}/${movieId}`)
        .then(res =>res.json())
        .catch(error => console.log(error));
};

// export const like = (nominationId, currentlikes) => {
//     return fetch(`${api.nominations}/${nominationId}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({likes: currentlikes})
//     })
//         .then(res => res.json())
//         .catch(err=> console.log(err));
// }

// export const validateInput = (input) => {
//     const { title, description, imageUrl } = input;

//     if (!title) {
//         return toast.error('Please, fill in the Title field.')
//     }
//     if (!description) {
//         return toast.error('Please, fill in the Description field.')
//     }
//     if (!imageUrl) {
//         return toast.error('Please, select an image file.')
//     }

// }