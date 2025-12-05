<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-xl font-heading font-bold text-secondary">Lady <span class="text-primary">Boutique</span></h1>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-primary focus:outline-none">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="#home" class="font-medium hover:text-secondary transition-all">Início</a>
        <a href="#collection" class="font-medium hover:text-secondary transition-all">Coleção</a>
        <a href="#about" class="font-medium hover:text-secondary transition-all">Sobre</a>
        <a href="#testimonials" class="font-medium hover:text-secondary transition-all">Depoimentos</a>
        <a href="#contact" class="font-medium hover:text-secondary transition-all">Contato</a>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center space-x-4">
        <a
            href="https://wa.me/5581988704806?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20bolsas%20da%20Lady%20Boutique"
            class="bg-secondary text-gray-brand px-4 py-2 rounded-full font-medium hover:bg-accent transition-all"
        >
          <i class="fab fa-whatsapp mr-2"></i>WhatsApp
        </a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-white py-4 px-4 shadow-lg">
      <div class="flex flex-col space-y-4">
        <a href="#home" class="font-medium hover:text-secondary transition-all" @click="closeMenu">Início</a>
        <a href="#collection" class="font-medium hover:text-secondary transition-all" @click="closeMenu">Coleção</a>
        <a href="#about" class="font-medium hover:text-secondary transition-all" @click="closeMenu">Sobre</a>
        <a href="#testimonials" class="font-medium hover:text-secondary transition-all" @click="closeMenu">Depoimentos</a>
        <a href="#contact" class="font-medium hover:text-secondary transition-all" @click="closeMenu">Contato</a>
        <a
            href="https://wa.me/5581988704806?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20bolsas%20da%20Lady%20Boutique"
            class="bg-secondary text-gray-brand px-4 py-2 rounded-full font-medium text-center hover:bg-accent transition-all"
            @click="closeMenu"
        >
          <i class="fab fa-whatsapp mr-2"></i>WhatsApp
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>