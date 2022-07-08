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





//tableau
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

//function
function calculer() {
    var ProduitS = 1.00
    var Quantity = parseInt(document.getElementById("Quantity").value);
    var unitPrix = parseInt(document.getElementById("unitPrix").value);
    ProduitS = Quantity * unitPrix;
    document.getElementById("S1").innerHTML = ProduitS;
}