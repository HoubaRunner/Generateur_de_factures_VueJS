<template>
  <h1>Générateur de facture et devis</h1>
  <p>
    Notre générateur de facture en ligne permet à nimporte qui de facilement
    créer des factures et des devis professionnelles au format PDF de manière
    intuitive.
  </p>
  <Generateur />
</template>

<script>
import Generateur from "./components/Generateur.vue";

export default {
  name: "App",
  components: {
    Generateur,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
