<script setup lang="ts">
import Main from './views/Main.vue';
import Page from './components/Page.vue';
</script>

<template>
  <Page class="box-border bg-gray-100" :hidden="true">
    <Main></Main>
  </Page>
</template>
