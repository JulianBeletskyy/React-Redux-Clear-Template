const API_URL = 'https://jsonplaceholder.typicode.com'

const makeJson = async (response, status) => {
    const json = await response.json()
    return Promise.resolve({data: json, statusCode: status})
}

const responseHandler = response => {
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
        const promise = makeJson(response, response.status)
        return promise
    }
}

const getHeader = () => 
    ({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })

export const get = (...data) => {
	const [url] = data
    return fetch(`${API_URL}/${url}`, {
        method: 'get',
        headers: getHeader(),
    })
    .then(responseHandler)
}

export const post = (...data) => {
    const [url, body] = data
    return fetch(`${API_URL}/${url}`, {
        method: 'post',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
    .then(responseHandler)
}