export const makeRequest = async (path, method = "GET", body = null, externalURL = false) => {

    // Gets the absolute URL from the relative path or if it's external URL, simply set URL to be the path
    let url = ""
    if (externalURL === false) {
        url = getURL(path)
    } else if (externalURL === true) {
        url = path
    }

    // Makes sure the HTTP method is uppercase
    method = method.toUpperCase()

    // If the method is a POST, PUT, PATCH, or DELETE method, set the content type header to application/json
    const headers = {}
    if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
        headers["Content-Type"] = "application/json"
    }

    // If a body was passed, JSON stringify the object
    if (body !== null) {
        body = JSON.stringify(body)
    }

    // Creates the options variable for the fetch function
    const options = { method, headers, body }

    // Performs the request and gets the response
    const response = await fetch(url, options)

    // Makes sure no errors were thrown in thr response
    if (!response.ok) {
        return {
            error: `Request failed with status ${response.status}`
        }
    }

    // Parses the reponse body into an object
    let data = undefined
    try {
        data = await response.json()
    } catch (error) {
        throw new Error(`Error parsing JSON response: ${error.message}`)
    }

    // Returns the reponse body as an object
    return data
}

// Returns the absolute URL for a given relative path. There will be different URLS for when in production versus development
export const getURL = (path) => {

    // Adds a / to the beginning if it is not already added
    if (path[0] !== "/") {
        path = "/" + path
    }

    // Grabs neccessary environment variables
    const environment = import.meta.env.VITE_environment
    const server_port = import.meta.env.VITE_server_port
    const deployment_url = import.meta.env.VITE_deployment_url

    // Determines the domain based off our environment and server port
    let domain = ""
    if (environment === "development") {
        domain = `http://localhost:${server_port}`
    } else if (environment === "production") {
        domain = `${deployment_url}:${server_port}`
    }

    // If the enviroment is unknown, throw an error
    else {
        throw new Error(`Cannot create absolute URL from relative path.\nUnknown environment: ${environment}`)
    }

    // Returns the absolute path
    return domain + path
}

// Exports our created functions
export default {
    getURL, makeRequest
}