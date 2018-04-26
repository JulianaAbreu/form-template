const API = 'https://private-785c05-learnit.apiary-mock.com';

export const get = (url) => {
    return request(url, {
        method: 'GET'
    })
}

export const post = (url, data) => {
    return request(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export const patch = (url, data) => {
    return request(url, {
        method: 'PATCH',
        body: JSON.stringify(data)
    })
}

export const request = (url, {contentType='application/json', ...customOptions}) => {
    const headers = {};

    if(contentType) {
        headers['Content-type'] = contentType;
    }

    const options = {
        ...customOptions,
        headers
    };

    return fetch(`${API}/${url}`, options)
        .then(response => {return response.json()})
        .catch(error => {console.log('error with server')})
}