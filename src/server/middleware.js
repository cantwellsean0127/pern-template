// The express module contains many built in middlewares
import { static as server_static_directory, json } from "express"

// The path module allows us to interact with file and directory paths
import { dirname, join } from "path"

// The express-rate-limit module allows us to add rate limiting to requests
import express_rate_limit from "express-rate-limit"

// Creates variables for this file and directory
const this_file = import.meta.url
const this_directory = dirname(this_file)

export default (server) => {


    // Parses the body of any incoming requests and converts it into an object if the body is a JSON string
    server.use(json())

    // Statically serves the dist directory (contains the build output from our react application)
    const dist_directory = join(this_directory, "../../public/dist").slice(5)
    server.use(server_static_directory(dist_directory))

    // Statically serves the media directory (contains images, videos, etc)
    const media_directory = join(this_directory, "../../public/media").slice(5)
    server.use(server_static_directory(media_directory))

    // Applies a rate limiting of 100 requests per 1 minute window
    server.use(express_rate_limit({
        windowMs: 1 * 60 * 1000,
        max: 500,
    }))

}