<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="submit_card">
    <div id="submit_title">
      <div id="titles">
        <h1>{{ msg }}</h1>
        <h2 v-if="mode == 'login'">Connectez-vous !</h2>
        <h2 v-else>
          Inscrivez-vous avec votre adresse e-mail professionelle !
        </h2>
      </div>
      <div id="subtitles">
        <p v-if="mode == 'login'">
          Vous n'avez pas encore de compte ?
          <span class="submit" @click="switchToSignup()">Inscrivez-vous!</span>
        </p>
        <p v-else>
          Vous avez déja un compte?
          <span class="submit" @click="switchToLogin()">Connectez-vous!</span>
        </p>
      </div>
    </div>
    <div id="submit_formulaire">
      <div id="champ_lastName" v-if="mode == 'create'">
        <label for="lastName">Veuillez entrer votre nom de famille</label>
        <input
          v-model="nom"
          type="text"
          id="lastName"
          placeholder="Nom de famille"
        />
      </div>
      <div id="champ_firstName" v-if="mode == 'create'">
        <label for="firstName">Veuillez entrer votre prénom</label>
        <input
          v-model="prenom"
          type="text"
          id="firstName"
          placeholder="Prénom"
        />
      </div>
      <div id="champ_email">
        <label for="email">Veuillez entrer votre adresse e-mail</label>
        <input v-model="email" type="email" id="email" placeholder="E-mail" />
      </div>
      <div id="champ_password">
        <label for="password">Veuillez entrer votre mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Mot de passe"
        />
      </div>
    </div>
    <div id="submit_btn">
      <button class="connexion_btn btn-disabled" v-if="(mode = 'login')">
        Connexion
      </button>
      <button
        class="inscription_btn"
        :class="{'btn-disabled': !validatedfields() } v-else"
        @click="createAccount()"
      >
        Inscription
      </button>
    </div>
  </div>
</template>

<script>
import { method } from "cypress/types/bluebird";

export default {
  name: "login",
  data() {
    return {
      mode: "login",
      email: "",
      prenom: "",
      nom: "",
      password: "",
    };
  },
  computed: {
    validatedfields: function () {
      if (this.mode == "create") {
        if (
          this.prenom != "" &&
          this.nom != "" &&
          this.email != "" &&
          this.password != ""
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  method: {
    switchToSignup: function () {
      this.mode = "create";
    },
    switchToLogin: function () {
      this.mode = "login";
    },
    createAccount: function () {
      console.log(this.email, this.nom, this.prenom, this.password);
    },
  },
};
</script>

<style scoped></style>
