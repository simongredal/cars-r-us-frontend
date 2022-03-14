import * as Api from "../js/api.js"

export async function didReceiveFocus() {
    await fetchAndRenderTableRows()
}

async function fetchAndRenderTableRows() {
    const cars = await Api.cars.getAll()
    const cars_table_body = document.querySelector("#cars-table-body")
    cars.forEach((car) => renderCarAsTableRowInTableSection(car, cars_table_body))
}

function renderCarAsTableRowInTableSection(car, table_section) {
    const row = table_section.insertRow()

    const idCell = row.insertCell()
    idCell.textContent = car.id
    idCell.classList.add("number")

    row.insertCell().textContent = car.brand

    row.insertCell().textContent = car.model

    const yearCell = row.insertCell()
    yearCell.textContent = car.year
    yearCell.classList.add("number")

    const priceCell = row.insertCell()
    priceCell.textContent = (car.dailyPriceInCents / 100).toFixed(2)
    priceCell.classList.add("number")
}
