<template>
  <div id="inscription_card">
    <div id="title">
      <h1>Inscription</h1>
      <p>Vous avez déjà un compte? Connectez vous!</p>
    </div>
    <form @submit.prevent="signup" id="formulaire">
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
    <router-link to="/">Retour à l'Accueil</router-link>
  </div>
</template>

<!-- cisse hal test3@groupomania.com Groupomani@123 -->

<script>
import { accountServices } from "@/_services";

export default {
  name: "signup",
  data() {
    return {
      user: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        isAdmin: false,
        lastNameErrorMsg: false,
        firstNameErrorMsg: false,
        emailErrorMsg: false,
      },
    };
  },
  methods: {
    signup() {
      // let lastName = this.user.lastName;
      // let firstName = this.user.firstName;
      // let email = this.user.email;
      // //les champs d'erreur
      // let lastName_error = this.user.lastNameErrorMsg;
      // let firstName_error = this.user.firstNameErrorMsg;
      // let email_error = this.user.emailErrorMsg;
      // //les regex
      // let lastNameRegexp =
      //   /^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/;
      // let firstNameRegexp =
      //   /^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/;
      // let emailRegexp =
      //   /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      // //les fonctions
      // function checkLastName(e) {
      //   e.preventDefault();
      //   if (lastName.validity.valueMissing) {
      //     lastName_error.textContent = "Veuillez indiquer votre nom";
      //     lastName_error.style.color = "red";
      //   }
      // }
      // lastName.onkeydown = function () {
      //   if (lastNameRegexp.test(lastName.value) == true) {
      //     lastName_error.textContent = "Format valide";
      //     lastName_error.style.color = "lime";
      //   } else {
      //     lastName_error.textContent =
      //       "Le format est incorrect (pas de chiffre ou caractères spéciaux)";
      //     lastName_error.style.color = "orange";
      //   }
      // };
      // checkLastName;

      // function checkfirstName(e) {
      //   e.preventDefault();
      //   if (firstName.validity.valueMissing) {
      //     firstName_error.textContent = "Veuillez indiquer votre nom";
      //     firstName_error.style.color = "red";
      //   }
      // }
      // firstName.onkeydown = function () {
      //   if (firstNameRegexp.test(firstName.value) == true) {
      //     firstName_error.textContent = "Format valide";
      //     firstName_error.style.color = "lime";
      //   } else {
      //     firstName_error.textContent =
      //       "Le format est incorrect (pas de chiffre ou caractères spéciaux)";
      //     firstName_error.style.color = "orange";
      //   }
      // };
      // checkfirstName();

      // function checkEmail(e) {
      //   e.preventDefault();
      //   if (email_error.validity.valueMissing) {
      //     email_error.textContent = "Veuillez indiquer votre nom";
      //     email_error.style.color = "red";
      //   }
      // }
      // email.onkeydown = function () {
      //   if (emailRegexp.test(email.value) == true) {
      //     email_error.textContent = "Format valide";
      //     email_error.style.color = "lime";
      //   } else {
      //     email_error.textContent =
      //       "Le format est incorrect (pas de chiffre ou caractères spéciaux)";
      //     email_error.style.color = "orange";
      //   }
      // };
      // checkEmail();

      // let ficheUser = JSON.parse(sessionStorage.getItem("User"));
      // console.log(ficheUser);
      // let userId = [];

      // userId.push(ficheUser.email);
      // console.log(userId);

      accountServices
        .signup(this.user)
        .then((res) => {
          //a condition que res data token existe sinon renvoi vers age
          sessionStorage.setItem("token", res.data.token);
          console.log(res);
          this.$router.push("/auth/secure");
          console.log("utilisateur crée");
        })
        .catch((err) => console.log(err));
    },
  },
};

//     fetch("http://localhost:8080/api/auth/signup", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       method: "POST",
//       body: this.user,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data), localStorage.setItem("token", data.this.user);
//         this.$router.push("admin/dashboard"); //forum
//       })
//       .catch(
//         (err) => console.log(err),
//         alert(
//           "Merci de vérifier l'exactitude des renseignements du formulaire"
//         )
//       );
//   },
// },
</script>

<style>
#inscription_card {
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
  margin-bottom: 8px;
}

button {
  margin: 12px;
}
</style>
