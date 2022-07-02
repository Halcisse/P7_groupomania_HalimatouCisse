<template>
  <div id="inscription_card">
    <div id="title">
      <h1>Inscription</h1>
      <p>Vous avez déjà un compte? Connectez vous!</p>
    </div>
    <form @submit.prevent="sinup" id="formulaire">
      <div class="champ_formulaire">
        <label for="lastName">Veuillez entrer votre nom de famille</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Nom de famille"
          v-model="user.lastName"
          required
        />
        <p id="lastNameErrorMsg"></p>
      </div>
      <div class="champ_formulaire">
        <label for="firstName">Veuillez entrer votre prénom</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Prénom"
          v-model="user.firstName"
          required
        />
        <p id="firstNameErrorMsg"></p>
      </div>
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
      <button type="submit" id=" btn_inscription">Inscription</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      user: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      fetch("http://localhost:8080/api/auth/signup", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.user),
      })
        .then((res) => res.json())
        .then(
          (data) => console.log(data)
          // localStorage.setItem("token", data.email)
        )
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#inscription_card {
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
  margin-bottom: 8px;
}

button {
  margin: 12px;
}
</style>
