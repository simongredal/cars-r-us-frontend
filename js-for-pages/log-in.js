import { server_url } from "../config.js"

export function didReceiveFocus() {
    document.querySelector("#log-in-form").addEventListener("submit", (event) => {
        event.preventDefault()
        sendLogInRequest()
    })
}

function sendLogInRequest() {
    const loginRequest = {}
    loginRequest.email = document.querySelector("#email-input").value
    loginRequest.password = document.querySelector("#password-input").value

    fetch(server_url + "/auth/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(loginRequest),
    })
        .then((response) =>
            response.ok ? response.json() : Promise.reject(response.json()),
        )
        .then((data) => {
            console.dir(data)
            window.localStorage.setItem("authorization", data.token)
        })
        .catch((error) => console.dir(error))
}
