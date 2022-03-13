import { renderTemplate, setActive, showPage } from "./utils.js"

const pageHandlers = {
    "page-see-cars": await import("./js-for-pages/see-cars.js"),
    "page-add-cars": await import("./js-for-pages/add-cars.js"),
    "page-edit-cars": await import("./js-for-pages/edit-cars.js"),
    "page-sign-up": await import("./js-for-pages/sign-up.js"),
    "page-my-details": await import("./js-for-pages/my-details.js"),
    "page-log-in": await import("./js-for-pages/log-in.js"),
    "page-log-out": await import("./js-for-pages/log-out.js"),
}

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id) //This sets up the HTML for the page

    pageHandlers[id].didReceiveFocus()
}

document.getElementById("menu").onclick = renderMenuItems
showPage("page-see-cars") //Set the default page to render
