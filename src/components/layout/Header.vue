<template>
    <v-app-bar app light flat >
      
      <v-img contain max-height="50" max-width="50" class="ml-5" :src="require('@/assets/logo.png')"></v-img>

      <v-app-bar-title>DIGIMON PLAYGROUND</v-app-bar-title>

      <router-link to="/"><v-btn text>Home</v-btn></router-link>
      <router-link to="/about"><v-btn text>About</v-btn></router-link>
      <router-link to="/digimons"><v-btn text>digimons</v-btn></router-link>

      <v-spacer></v-spacer>

      <v-btn color="blue" icon><v-icon>mdi-information-outline</v-icon></v-btn>

    </v-app-bar>
</template>
<script>
export default {
  name: "header",
};
</script>
<style>
.v-toolbar__content{
  border-bottom: 0.1px solid gainsboro;
}

a { 
  text-decoration: none;
  color: inherit;
}

</style>