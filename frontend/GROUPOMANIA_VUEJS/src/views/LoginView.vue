<template>
  <div id="connexion_card">
    <div id="title">
      <h1>Connexion</h1>
      <p>Vous n'avez pas encore de compte? Inscrivez vous!</p>
    </div>
    <form @submit.prevent="login" id="formulaire">
      <div class="champ_formulaire">
        <label for="email">Veuillez entrer votre adresse e-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
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
          required
        />
        <p id="passwordErrorMsg"></p>
      </div>
    </form>
    <button type="submit" id=" btn_connexion">Connexion</button>
  </div>
</template>

<script>
// import Compteur from "..components/Compteur.vue";

export default {
  name: "Login",
  methods: {
    login() {
      console.log("stop form");
    },
  },
  // components: {
  //   Compteur,
  // // },
  // data: () => {
  //   return {
  //     email: "",
  //     password: "",
  //   };
  // },
  // mounted() {
  //   fetch(`http://localhost:8080/api/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "bearer",
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         alert("Cet utilisateur n'existe pas !");
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // localStorage.setItem("userId", data.userId);
  //       // localStorage.setItem("token", data.token);
  //       localStorage.setItem("firstName", data.firstname);
  //       localStorage.setItem("lastName", data.lastname);
  //       // window.location.assign("/forum");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
};
</script>

<style>
#connexion_card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
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
