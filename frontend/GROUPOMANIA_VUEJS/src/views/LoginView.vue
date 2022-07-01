<template>
  <div id="connexion_card">
    <div id="title">
      <h1>Connexion</h1>
      <p>Vous n'avez pas encore de compte? Inscrivez vous!</p>
    </div>
    <form method="get" id="formulaire">
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
    <button id=" btn_connexion">Connexion</button>
  </div>
</template>

<script setup></script>

<style></style>
