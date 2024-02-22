<template>
  <header class="bg-gray-900 text-yellow-600 shadow h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class=""> Home </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'about' }"
        class="inline-flex items-center px-2 h-full transition-colors text-yellow-600 hover:bg-red-500 hover:text-white"
      >
        About
      </router-link>
      <router-link
        :to="{ name: 'skills' }"
        class="inline-flex items-center px-2 h-full transition-colors text-yellow-600 hover:bg-red-500 hover:text-white"
      >
        Skills
      </router-link>
      <router-link
        :to="{ name: 'projects' }"
        class="inline-flex items-center px-2 h-full transition-colors text-yellow-600 hover:bg-red-500 hover:text-white"
      >
        Projects
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="inline-flex items-center px-2 h-full transition-colors text-yellow-600 hover:bg-red-500 hover:text-white"
      >
        Contact
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
