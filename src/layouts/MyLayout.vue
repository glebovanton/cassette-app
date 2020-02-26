<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  meta: {
    // sets document title
    title: "Cassette",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${title} - Музыкальная студия в Минске`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content: "Cassette-Музыкальная студия в Минске. +375 25 797-24-52"
      },
      keywords: { name: "keywords", content: "Музыкальная студия в Минске" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
