<script setup lang="ts">
import Main from './views/Main.vue';
import Page from './components/Page.vue';
</script>

<template>
  <Page :hidden="true">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </header>
    <h1>Tela splash</h1>
    <Main></Main>
  </Page>
</template>
