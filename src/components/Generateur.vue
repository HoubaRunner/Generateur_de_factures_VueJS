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
          <label for="fiscale" class="labelForm mt-2">Adresse :</label>
          <textarea
            class="textAreaForm form-control"
            placeholder="Adresse"
          ></textarea>
        </div>
        <button class="btn btn-primary btnForm">Ajouter un champ</button>
      </div>
      <div class="B3" style="margin-left: auto">
        <h5 class="BB">Détails du document</h5>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="sociale" class="labelForm">Date de création : </label>
          <input
            type="date"
            class="form-control inputForm"
            name="sociale"
            id="sociale"
            v-model="sociale"
            placeholder="Raison sociale"
          />
        </div>
        <div style="width: 30vw" class="mt-2 mb-2 d-flex align-items-center">
          <label for="fiscale" class="labelForm">Date d'échéance : </label>
          <input
            type="date"
            class="form-control inputForm"
            name="fiscale"
            id="fiscale"
            v-model="fiscale"
            placeholder="Matricule fiscale"
          />
        </div>
        <button class="btn btn-primary btnForm">Ajouter un champ</button>
      </div>
    </div>
  </form>
</template>



<script>
export default {
  data() {
    return {
      Facture: "",
      Referance: "",
    };
  },
};
</script>

<style>
.form-style-9 {
  width: 80vw;
  background: white;
  padding: 70px;
  margin: 50px auto;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.144);
  border-radius: 10px;
}
body {
  background-color: whitesmoke;
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
  padding-bottom: 15px;
  border-bottom: 5px solid rgba(0, 89, 255, 0.884);
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
</style>