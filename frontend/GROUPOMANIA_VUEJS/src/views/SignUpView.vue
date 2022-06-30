<template>
  <div id="inscription_card">
    <div id="title">
      <h1>Inscription</h1>
      <p>Vous avez déjà un compte? Connectez vous!</p>
    </div>
    <div id="formulaire">
      <div id="champ_lastName">
        <label for="lastName">Veuillez entrer votre nom de famille</label>
        <input type="text" id="lastName" placeholder="Nom de famille" />
      </div>
      <div id="champ_firstName">
        <label for="firstName">Veuillez entrer votre prénom</label>
        <input type="text" id="firstName" placeholder="Prénom" />
      </div>
      <div id="champ_email">
        <label for="email">Veuillez entrer votre adresse e-mail</label>
        <input type="email" id="email" placeholder="E-mail" />
      </div>
      <div id="champ_password">
        <label for="password">Veuillez entrer votre mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" />
      </div>
    </div>
    <button id=" btn_inscription">Inscription</button>
  </div>
</template>

<script setup></script>

<style></style>
