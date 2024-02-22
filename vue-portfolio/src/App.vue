<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue'
</script>

<!-- <template>
  <header>
    <div>
      <navbar>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </navbar>
    </div>
  </header>
  <RouterView />
  <FooterComp />
</template> -->

<template>
  <router-view />
  <FooterComp />
</template>

<style scoped></style>
