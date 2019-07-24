const wrappedFetch = (url, ...options) => {
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

export default wrappedFetch
