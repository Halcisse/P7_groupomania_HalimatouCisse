<template>
  <div id="connexion_card">
    <div id="title">
      <h1>Connexion</h1>
      <p>
        Vous n'avez pas encore de compte?
        <router-link to="/signup">Inscrivez vous!</router-link>
      </p>
    </div>
    <form @submit.prevent="login" id="formulaire">
      <div class="champ_formulaire">
        <label for="email">Veuillez entrer votre adresse e-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          v-model="user.email"
          required
        />
        <p id="emailErrorMsg"></p>
      </div>
      <div class="champ_formulaire">
        <label for="password">Veuillez entrer votre mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          v-model="user.password"
          required
        />
        <p id="passwordErrorMsg"></p>
      </div>
      <button type="submit" id=" btn_connexion">Connexion</button>
    </form>
    <router-link to="/">Retour à l'Accueil</router-link>
  </div>
</template>

<script>
// import { accountServices } from "@/_services";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      fetch("http://localhost:3000/api/auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data), console.log(data.token);
          if (data.token) {
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("id", data.id);
            this.$router.push("/forum");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#connexion_card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  padding: 30px 10px;
  border: 2px solid #fd2d01;
  border-radius: 21px;
  /* background-color: chartreuse; */
}

#title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
.champ_formulaire {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  margin: 12px;
}
</style>
