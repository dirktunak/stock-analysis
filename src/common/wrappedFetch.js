export const wrappedFetch = (url, ...options) => {
    return new Promise((resolve, reject) => {
        fetch(url, ...options)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Network response was not ok.')
            })
            .then(body => resolve(body))
            .catch(error => reject(error))
    })
}

export const wrappedJWTFetch = (url, data, ...options) => {
    return new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: window.localStorage.jwt
                }
            },
            ...options
        )
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Network response was not ok.')
            })
            .then(body => resolve(body))
            .catch(error => reject(error))
    })
}
