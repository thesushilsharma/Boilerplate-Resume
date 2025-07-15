<template>
  <Header />
  <main class="bg-white">
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
</script>
