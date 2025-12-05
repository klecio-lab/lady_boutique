<template>
  <section class="newsletter-bg py-16 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl text-white font-heading font-bold mb-4">Fique por dentro das novidades</h2>
      <p class="text-xl mb-8">Receba ofertas exclusivas e seja o primeiro a saber sobre novos lançamentos.</p>

      <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto flex">
        <input
            type="email"
            placeholder="Seu melhor e-mail"
            v-model="email"
            class="flex-grow px-4 py-3 rounded-l-full focus:outline-none text-primary"
            required
        >
        <button type="submit" class="bg-gray-brand px-6 py-3 rounded-r-full font-medium hover:bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:text-gray-brand">Inscrever</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const subscribeNewsletter = () => {
  alert(`Obrigado por se inscrever com o email: ${email.value}`)
  email.value = ''
}
</script>
