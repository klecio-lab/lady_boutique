<template>
  <section id="instagram" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-heading font-bold mb-4">Siga-nos no Instagram</h2>
        <p class="text-xl text-gray-brand mb-6">Confira nossas últimas novidades e ofertas exclusivas</p>
        <a
            href="https://www.instagram.com/_ladyboutique1/"
            target="_blank"
            class="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
        >
          <i class="fab fa-instagram text-2xl mr-3 text-white"></i>
          @_ladyboutique1
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <a
            v-for="(image, index) in images"
            :key="index"
            href="https://www.instagram.com/_ladyboutique1/"
            target="_blank"
            class="relative overflow-hidden rounded-lg aspect-square group"
        >
          <div class="h-full bg-cover bg-center transition-all group-hover:scale-110" :style="`background-image: url('${image}');`"></div>
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
            <i class="fab fa-instagram text-gray-brand text-3xl opacity-0 group-hover:opacity-100 transition-all"></i>
          </div>
        </a>
      </div>

      <div class="text-center mt-8">
        <p class="text-gray-brand text-sm">Clique em qualquer imagem para ver mais no Instagram</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/bolsas/WhatsApp Image 2025-11-07 at 11.45.23.jpeg',
  '/bolsas/WhatsApp Image 2025-11-07 at 11.45.24.jpeg',
  '/bolsas/WhatsApp Image 2025-11-07 at 11.47.41.jpeg',
  '/bolsas/WhatsApp Image 2025-11-07 at 11.49.11.jpeg',
  '/bolsas/WhatsApp Image 2025-11-07 at 11.49.45.jpeg'
]
</script>
