function addClientLigne(e) {
    e.preventDefault()
    const element = `<div style="width:30vw" class="mt-2 mb-2 d-flex align-items-center"><input style="width:40%;margin-right:8px" placeholder="Label" class="form-control" type="text" />
            <input style="width:60%" type="text" class="form-control inputForm" name="sociale"
            />
            <img src="./image/minus.png" class="iconForm" onclick="removeC(this);" /></div>`
    const div = document.createElement("div")
    div.innerHTML = element.trim()
    e.target.parentNode.insertBefore(div, e.target)
}
function removeC(element) {
    element.parentNode.parentNode.style.display = "none"
}
document.getElementById("addClientLigne").addEventListener("click", addClientLigne)
document.getElementById("addDocLigne").addEventListener("click", addClientLigne)


function handleDisabled(e) {
    if (e.target.title == "enable") {
        e.target.title = "disable"
        e.target.src = "./image/hidden.png"
        e.target.parentNode.children[0].style.opacity = 0.4
        e.target.parentNode.children[1].disabled = true
    }
    else {
        e.target.title = "enable"
        e.target.src = "./image/eye.png"
        e.target.parentNode.children[0].style.opacity = 1
        e.target.parentNode.children[1].disabled = false
    }
}


document.querySelectorAll(".eye").forEach(element => {
    element.addEventListener("click", handleDisabled)
});


var timbreValue = "0.600"


function handleTimbre(e) {
    if (e.target.innerText == "- Timbre fiscal") {
        e.target.innerText = "+ Ajouter le timbre fiscal"
        e.target.colSpan = "2"
        e.target.parentNode.children[1].style.display = "none"
    }
    else {
        e.target.innerText = "- Timbre fiscal"
        e.target.colSpan = "1"
        if (e.target.parentNode.children[1]) {
            e.target.parentNode.children[1].style.display = "flex"
        }
        else {
            const td = document.createElement("td")
            td.innerText = timbreValue + " DT"
            e.target.parentNode.appendChild(td)
        }
    }

}

document.querySelector(".timbre").addEventListener("click", handleTimbre)