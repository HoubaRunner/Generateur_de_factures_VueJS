//functio add ligne
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

//functio HIDE
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

//functio Timbre Fiscal
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

//function Date TODAY 
document.getElementById('DC').value = new Date().toISOString().substring(0, 10);
//function Produit Tab
function calculer() {
    var ProduitS = 1.00
    var Quantity = parseInt(document.getElementById("Quantity").value);
    var unitPrix = parseInt(document.getElementById("unitPrix").value);
    ProduitS = Quantity * unitPrix;
    document.getElementById("S1").innerHTML = ProduitS + ".00DT";
}




function handleMenu() {
    document.querySelector(".hideMenu").classList.toggle("hideM")
}

document.getElementById("toogleMenu").addEventListener("click", handleMenu)



/*select functions*/
function addProduct() {
    const container = document.getElementById("custom_select_result")
    const newElement = document.createElement('tr')
    const insideTheElement = `
                     
                            <td>
                                <input type="text" class="form-control" id="tabref" name="tabref" placeholder="Référence"
                                    value="" />
                            </td>
                            <td>
                                <input type="text" class="form-control" name="product" id="product"
                                    placeholder="Produit / Service" value="" />
                            </td>

                            <td>
                                <input type="number" name="Quantity" id="Quantity" style="width:100px;" class="form-control"
                                    value="0" />
                            </td>

                            <td>
                                <input type="number" name="unitPrix" id="unitPrix" style="width:170px;" class="form-control"
                                    value="0" />
                            </td>
                            <td>
                                <select class=" form-select">
                                    <option value="0">0%</option>
                                    <option value="7">7%</option>
                                    <option value="13">13%</option>
                                    <option value="19">19%</option>
                                </select>
                            </td>
                            <td id="S1">0,000 DT</td>
                       
    `
    newElement.innerHTML = insideTheElement.trim()
    container.appendChild(newElement)
}

function addSep() {
    const container = document.getElementById("custom_select_result")
    const newElement = document.createElement("tr")
    const td = document.createElement("td")
    td.colSpan = "6"
    newElement.appendChild(td)
    newElement.classList.add("sep")
    td.innerHTML = "<div></div>".trim()
    container.appendChild(newElement)
}

function addText() {
    const container = document.getElementById("custom_select_result")
    const newElement = document.createElement("tr")
    const td = document.createElement("td")
    td.colSpan = "6"
    newElement.appendChild(td)
    td.innerHTML = "<textarea class='form-control form-control-lg'></textarea>".trim()
    container.appendChild(newElement)
}
function addSousTotal() {
    const container = document.getElementById("custom_select_result")
    const newElement = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    td1.classList.add("sep")
    td2.classList.add("sep")
    td3.classList.add("sep")
    td1.colSpan = "4"
    newElement.appendChild(td1)
    td2.style.whiteSpace = "nowrap"
    td2.innerText = "Sous total: "
    newElement.appendChild(td2)
    td3.innerText = "0,000 DT"
    newElement.appendChild(td3)
    container.appendChild(newElement)
}
function closeMenu(label) {
    document.querySelector(".hideMenu").classList.add("hideM")
    if (label == "Ajouter un produit") addProduct()
    else if (label == "Ajouter un séparateur") addSep()
    else if (label == "Ajouter du texte") addText()
    else if (label == "Ajouter un sous-total") addSousTotal()
}
document.querySelectorAll(".hideMenu div").forEach(element => {
    element.addEventListener("click", () => { closeMenu(element.innerText) })
});



const logo = document.getElementById("Logo")
const inputImage = document.getElementById("imageInput")

const defaultImage = "./image/logo.jpg"

logo.addEventListener("click", () => {
    inputImage.click()
})

inputImage.addEventListener("input", () => {
    if (inputImage.files[0]) {
        logo.src = URL.createObjectURL(inputImage.files[0])
        document.querySelector(".deleteIconPhoto").classList.remove("hideM")
    }
    else {
        logo.src = defaultImage
        document.querySelector(".deleteIconPhoto").classList.add("hideM")
    }
})
document.querySelector(".deleteIconPhoto").addEventListener("click", () => {
    inputImage.value = ""
    logo.src = defaultImage
    document.querySelector(".deleteIconPhoto").classList.add("hideM")
})





























//tableau
/*
    $(document).ready(function () {
        //Try to get tbody first with jquery children. works faster!
        var tbody = $('#myTable').children('tbody');

        //Then if no tbody just select your table 
        var table = tbody.length ? tbody : $('#myTable');


        $('#B1').click(function () {
            //Add row
            table.append('<tr><td><input type="text" class="form-control" id="tabref" name="tabref" placeholder="Référence" value="" /></td><td><input type="text" class="form-control" name="product" id="product" placeholder="Produit / Service" value="" /></td><td><input type="number" name="Quantity" id="Quantity" style="width:100px;" class="form-control"  value="0" /></td><td><input type="number" name="unitPrix" id="unitPrix" style="width:170px;" class="form-control" value="0" /> </td><td><select class="form-select"><option value="0">0%</option><option value="7">7%</option><option value="13">13%</option></select></td><td>0,000 DT</td></tr >');
        })
    });

$(document).ready(function () {
    //Try to get tbody first with jquery children. works faster!
    var tbody = $('#myTable').children('tbody');

    //Then if no tbody just select your table 
    var table = tbody.length ? tbody : $('#myTable');


    $('#B2').click(function () {
        //Add row
        table.append('<tr><td colspan="6"><textarea type="text" name="Note" id="Note" v-model="Note" class="Note form-control" style = "margin-left: auto;margin-right: auto;width: 100%;" placeholder = "" ></textarea ></td ></tr > ');
    })
});


$(document).ready(function () {
    //Try to get tbody first with jquery children. works faster!
    var tbody = $('#myTable').children('tbody');

    //Then if no tbody just select your table 
    var table = tbody.length ? tbody : $('#myTable');


    $('#B3').click(function () {
        //Add row
        table.append('<tr><td colspan="6"><input type="text" class="form-control" id="Section" name="Section" placeholder="Section"  value = "" /></td ></tr > ');
    })
});

$(document).ready(function () {
    //Try to get tbody first with jquery children. works faster!
    var tbody = $('#myTable').children('tbody');

    //Then if no tbody just select your table 
    var table = tbody.length ? tbody : $('#myTable');


    $('#B4').click(function () {
        //Add row
        table.append('<tr><td colspan="6"><div class="blueLigne "></div></td ></tr > ');
    })
});
*/

