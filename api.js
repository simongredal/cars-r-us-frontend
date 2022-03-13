import { server_url } from "./config.js"

export const cars = {}
cars.getAll = async function () {
    const request = buildRequest("get", "/cars", null)
    const response = await fetch(request)
    const data = response.json()

    if (response.ok) return data
    else console.dir(data)

    return []
}

cars.addCar = async function (car) {
    const request = buildRequest("post", "/cars", car)
    const response = await fetch(request)
    const data = response.json()

    if (response.ok) return data
    else console.dir(data)

    return {}
}

function buildRequest(method, path, body) {
    const options = { method: method, headers: {} }

    options.headers["Accept"] = "application/json"
    if (method.toLowerCase() !== "get") {
        options.headers["Content-Type"] = "application/json"
        options.body = JSON.stringify(body)
    }

    const authorization = window.localStorage.getItem("authorization")
    if (authorization) options.headers["Authorization"] = "Bearer " + authorization

    console.dir(options)
    return new Request(server_url + path, options)
}
