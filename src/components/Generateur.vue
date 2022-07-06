<template>
  <form class="form-style-9">
    <div class="d-flex align-items-center">
      <div>
        <img name="Logo" id="Logo" src="../assets/logo.png" />
      </div>
      <div style="width: 20vw" class="B2">
        <label for="Facture"> </label>
        <input
          type="text"
          name="Facture"
          style="font-size: 35px"
          id="Facture"
          v-model="Facture"
          class="form-control"
          placeholder="Facture"
        />

        <label for="Referance"> </label>
        <input
          type="text"
          name="Referance"
          class="form-control"
          id="Referance"
          v-model="Referance"
          placeholder="Référence (FAC-0001)"
        />
      </div>
    </div>

    <div class="d-flex align-items-start mt-5">
      <div class="B3">
        <h5 class="BB">Détails du client</h5>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="sociale" class="labelForm">Raison sociale : </label>
          <input
            type="text"
            class="form-control inputForm"
            name="sociale"
            id="sociale"
            v-model="sociale"
            placeholder="Raison sociale"
          />
        </div>

        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="fiscale" class="labelForm">Matricule fiscale :</label>
          <input
            type="text"
            class="form-control inputForm"
            name="fiscale"
            id="fiscale"
            v-model="fiscale"
            placeholder="Matricule fiscale"
          />
        </div>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-start">
          <label for="Adresse" class="labelForm mt-2">Adresse :</label>
          <textarea
            class="textAreaForm form-control"
            name="Adresse"
            id="Adresse"
            v-model="Adresse"
            placeholder="Adresse"
          ></textarea>
        </div>
        <button class="btn btn-primary btnForm mt-3">Ajouter un champ</button>
      </div>
      <div class="B3" style="margin-left: auto">
        <h5 class="BB">Détails du document</h5>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="DC" class="labelForm">Date de création : </label>
          <input
            type="date"
            class="form-control inputForm"
            name="DC"
            id="DC"
            v-model="DC"
            placeholder="Raison sociale"
          />
        </div>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="DE" class="labelForm">Date d'échéance : </label>
          <input
            type="date"
            class="form-control inputForm"
            name="DE"
            id="DE"
            v-model="DE"
            placeholder="Matricule fiscale"
          />
        </div>
        <button class="btn btn-primary btnForm mt-3">Ajouter un champ</button>
      </div>
    </div>
    <br />
    <div class="blueLigne mt-5"></div>
    <table class="table table-bordered">
      <thead>
        <tr class="bg-light">
          <th class="text-center">Référence</th>
          <th class="text-center">Désignation</th>
          <th class="text-center">Quantité</th>
          <th class="text-center">Prix unitaire</th>
          <th class="text-center">TVA</th>
          <th class="text-center" style="flex-wrap: nowrap">Total HT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              class="form-control"
              id="tabref"
              name="tabref"
              placeholder="Référence"
              value=""
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              name="product"
              id="product"
              placeholder="Produit / Service"
              value=""
            />
          </td>

          <td>
            <input
              type="number"
              name="Quantity"
              id="Quantity"
              style="width: 100px"
              class="form-control"
              value="0"
            />
          </td>

          <td>
            <input
              type="number"
              name="unitPrix"
              id="unitPrix"
              style="width: 170px"
              class="form-control"
              value="0"
            />
          </td>
          <td>
            <select class="form-select">
              <option value="0">0%</option>
              <option value="7">7%</option>
              <option value="13">13%</option>
              <option value="19">19%</option>
            </select>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <br />
    <div style="width: 100%; display: flex; justify-content: center">
      <button class="btn btn-primary btnForm">Ajouter une ligne</button>
    </div>
    <br />
    <br />
    <div style="width: 100%" class="mt-2 mb-2 d-flex align-items-start">
      <textarea
        type="text"
        name="Note"
        id="Note"
        v-model="Note"
        class="Note form-control"
        style="margin-left: auto; margin-right: auto; width: 40%"
        placeholder="Note"
      ></textarea>
    </div>
    <br />
    <br />
    <div class="blueLigne"></div>
    <div class="d-flex align-items-start mt-5">
      <div class="B3">
        <h5 class="BB" style="border: none">INFORMATIONS DE L'ENTREPRISE</h5>
        <div>
          <label for="INFORMATIONS" class="labelForm"> </label>
          <input
            type="text"
            style="width:40vw width: 100%"
            class="form-control form-control-lg inputForm"
            name="INFORMATIONS"
            id="INFORMATIONS"
            v-model="INFORMATIONS"
            placeholder="Société XYZ, 9 rue exemple, Tunis MF: 0000025 exemple@exemple.tn +216 26 999 999"
          />
        </div>
      </div>

      <div
        class="B3"
        style="margin-left: auto; justify-content: end; align-items: center"
      >
        <h5 class="BB" style="border: none">INFORMATIONS BANCAIRES</h5>
        <div style="width: 22vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="sociale" class="labelForm">Banque : </label>
          <input
            type="text"
            class="form-control inputForm"
            name="Banque"
            id="Banque"
            v-model="Banque"
            placeholder="Banque"
          />
        </div>

        <div style="width: 22vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="IBAN" class="labelForm">IBAN : </label>
          <input
            type="text"
            class="form-control inputForm"
            name="IBAN"
            id="IBAN"
            v-model="IBAN"
            placeholder="TN59 XXXX XXXX XXXX"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<style>
option {
  font-size: 20px;
}

table {
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 2px;
}

.form-style-9 {
  width: 80vw;
  background: white;
  padding: 70px;
  margin: 50px auto;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.144);
  border-radius: 10px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

img {
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

.B2 {
  margin-left: auto;
}

.B3 {
  display: flex;
  flex-direction: column;
  align-items: start;
}

#Logo {
  height: 170px;
  width: 190px;
}

.BB {
  width: 350px;
  text-align: left;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 5px solid #4e66f8;
}

.labelForm {
  margin-right: auto;
  white-space: nowrap;
}

.inputForm {
  width: 70%;
  margin-left: 3px;
}

.textAreaForm {
  resize: vertical;
  width: 70%;
}

.btnForm {
  color: #fff;
  background-color: #4e66f8;
  border-color: #4e66f8;
  box-shadow: 0 2px 2px rgb(78 102 248 / 20%) !important;
}

.blueLigne {
  height: 4px;
  background-color: #4e66f8;
  width: 100%;
}
</style>