const onRequest = (url) => {
    return fetch(url).then(result => {
        if (result.ok) {
            return result.json()
        } else {
            return Promise.reject(result.status)
        }
    })
}

export default onRequest;