/**
 * The encoder method we have used when inserting untrusted data via the innerHTML property
 * Ref: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
 * @param {string} str
 * @returns {string} the encode string
 */
export function encode(str) {
    let encoded = "" + str
    encoded = encoded.replace(/&[^amp;][^gt;][^lt;][^quot;][^#039;]/g, "&amp;")
    encoded = encoded.replace(/>/g, "&gt;")
    encoded = encoded.replace(/</g, "&lt;")
    encoded = encoded.replace(/"/g, "&quot;")
    encoded = encoded.replace(/'/g, "&#039;")
    return encoded
}

export function setActive(newActive) {
    const menu_items = document.getElementById("menu").querySelectorAll("a")
    menu_items.forEach((item) => {
        item.classList.remove("active")
    })
    if (newActive) {
        newActive.classList.add("active")
    }
}

export function renderTemplate(id) {
    const template = document.querySelector(`template[data-id=${id}]`)
    if (!template) {
        return console.error(`No <template> found for '${id}' `)
    }
    const clone = template.content.cloneNode(true)
    document.querySelector("#content").innerHTML = ""
    document.querySelector("#content").appendChild(clone)
}

const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
})

export function showPage(pageId) {
    document.getElementById(pageId).dispatchEvent(clickEvent)
}
