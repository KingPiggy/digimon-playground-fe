<template>
  <v-card class="mx-auto">
    <v-img :props="img" :src="img" height="100px" width="150px" contain></v-img>
    <v-card-title :props="name"> {{ name }} </v-card-title>
    <v-card-subtitle :props="level"> {{ level }} </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  name: "digimonCard",
  data: () => ({
    show: false,
  }),
  props: {
    name: String,
    level: String,
    img: String,
  },
};
</script>
<style></style>
