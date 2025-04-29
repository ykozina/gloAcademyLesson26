'use strict'

const getData = () => {
    return fetch('./db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        });
};

const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        });
};


getData()
    .then(data => {
        console.log(data);
        return sendData(data);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
