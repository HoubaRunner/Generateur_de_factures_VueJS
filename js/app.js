// //Image :

// // Facture :
// var inputFacture= document.getElementById("Facture");
// localStorage.setItem("Facture", inpuFacture.value);
// var inputReferance= document.getElementById("Referance");
// localStorage.setItem("Referance", inputReferance.value);
// // Client :
// var inputSociale= document.getElementById("sociale");
// localStorage.setItem("sociale", inputSociale.value);
// var inputFiscale= document.getElementById("fiscale");
// localStorage.setItem("fiscale", inputFiscale.value);
// var inputAdresse= document.getElementById("Adresse");
// localStorage.setItem("Adresse", inputAdresse.value);
// // Documents :
// var inputDC= document.getElementById("DC");
// localStorage.setItem("DC", inputDC.value);
// var inputDE= document.getElementById("DE");
// localStorage.setItem("DE", inputDE.value);
// // Tableau :

// // Banque :
// var inputInfo= document.getElementById("INFORMATIONS");
// localStorage.setItem("INFORMATIONS", inputInfo.value);
// var inputBanque= document.getElementById("Banque");
// localStorage.setItem("Banque", inputBanque.value);

const app = new Vue({
    el: '#app',
    data: {
        Facture: '',
        Referance: '',
        sociale: '',
        fiscale: '',
        Adresse: '',
        DC: '',
        DE: '',
        INFORMATIONS: '',
        Banque: '',
    },
    mounted() {
        if (localStorage.Facture) {
            this.Facture = localStorage.Facture;
        }
        if (localStorage.Referance) {
            this.Referance = localStorage.Referance;
        }
        if (localStorage.label) {
            this.label = localStorage.label;
        }
        if (localStorage.sociale) {
            this.sociale = localStorage.sociale;
        }
        if (localStorage.fiscale) {
            this.fiscale = localStorage.fiscale;
        }
        if (localStorage.Adresse) {
            this.Adresse = localStorage.Adresse;
        }
        if (localStorage.DC) {
            this.DC = localStorage.DC;
        }
        if (localStorage.DE) {
            this.DE = localStorage.DE;
        }
        if (localStorage.INFORMATIONS) {
            this.INFORMATIONS = localStorage.INFORMATIONS;
        }
        if (localStorage.Banque) {
            this.Banque = localStorage.Banque;
        }
    },
    methods: {
        persist() {
            localStorage.Facture = this.Facture;
            localStorage.Referance = this.Referance;
            localStorage.Referance = this.label;
            localStorage.sociale = this.sociale;
            localStorage.fiscale = this.fiscale;
            localStorage.Adresse = this.Adresse;
            localStorage.DC = this.DC;
            localStorage.DE = this.DE;
            localStorage.INFORMATIONS = this.INFORMATIONS;
            localStorage.Banque = this.Banque;

            console.log('now pretend I did more stuff...');
        },
    },
    watch: {
        Facture(newFacture) {
            localStorage.Facture = newFacture;
        },
        Referance(newReferance) {
            localStorage.Referance = newReferance;
        },
        Referance(newlabel) {
            localStorage.label = newlabel;
        },
        sociale(newsociale) {
            localStorage.sociale = newsociale;
        },
        fiscale(newfiscale) {
            localStorage.fiscale = newfiscale;
        },
        Adresse(newAdresse) {
            localStorage.Adresse = newAdresse;
        },
        DC(newDC) {
            localStorage.DC = newDC;
        },
        INFORMATIONS(newINFORMATIONS) {
            localStorage.INFORMATIONS = newINFORMATIONS;
        },
        Banque(newBanque) {
            localStorage.Banque = newBanque;
        }

    }
})