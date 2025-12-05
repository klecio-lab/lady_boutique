<template>
  <div>
    <app-header></app-header>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/Header.vue'

definePageMeta({
  layout: 'default',
})
</script>

<style>




.newsletter-bg {
  background-image: linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80');
  background-size: cover;
  background-position: center;
}

.testimonial-bg {
  background-image: linear-gradient(rgba(212, 175, 55, 0.9), rgba(212, 175, 55, 0.9)), url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80');
  background-size: cover;
  background-position: center;
}

.transition-all {
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>