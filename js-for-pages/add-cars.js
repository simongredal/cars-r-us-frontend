import * as Api from "../api.js"

export function didReceiveFocus() {
    document.querySelector("#add-car-form").addEventListener("submit", async (event) => {
        event.preventDefault()
        await sendAddCarRequest()
    })
}

async function sendAddCarRequest() {
    const carRequest = {}
    carRequest.brand = document.querySelector("#add-car-form-make-input").value
    carRequest.model = document.querySelector("#add-car-form-model-input").value
    carRequest.year = document.querySelector("#add-car-form-year-input").value
    carRequest.dailyPriceInCents =
        document.querySelector("#add-car-form-price-input").value * 100
    carRequest.bestDiscountPercentage =
        document.querySelector("#add-car-form-discount-input").value / 100

    const carResponse = await Api.cars.addCar(carRequest)
    console.dir(carResponse)
}
