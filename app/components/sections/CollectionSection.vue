<template>
  <section id="collection" class="py-16 collection-bg">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-brand">Coleção em Destaque</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.name" :product="product" />
      </div>

      <div class="text-center mt-12">
        <a href="#contact" class="bg-secondary text-gray-brand px-8 py-3 rounded-full font-medium hover:bg-accent transition-all">
          Ver Coleção Completa
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'

const products = [
  {
    name: 'Bolsa Sacolão',
    description: 'Bolsa em couro sintético com alça ajustável e compartimento interno.',
    price: 'R$ 79,99',
    image: '/bolsas/WhatsApp Image 2025-11-07 at 11.45.23.jpeg'
  },
  {
    name: 'Bolsa Quadradinha',
    description: 'Ideal para o dia a dia, com design moderno e prático.',
    price: 'R$ 19,99',
    image: '/bolsas/WhatsApp Image 2025-11-07 at 11.45.24.jpeg'
  },
  {
    name: 'Bolsa Quadradinha',
    description: 'Timeless e sofisticada, perfeita para ocasiões especiais.',
    price: 'R$ 19,99',
    image: '/bolsas/WhatsApp Image 2025-11-07 at 11.47.41.jpeg'
  },
  {
    name: 'Bolsa Baú',
    description: 'Siga as tendências com estilo e conforto.',
    price: 'R$ 49,99',
    image: '/bolsas/WhatsApp Image 2025-11-07 at 11.49.11.jpeg'
  },
  {
    name: 'Bolsa Cleo',
    description: 'Luxo e elegância para quem busca sofisticação.',
    price: 'R$ 49,99',
    image: '/bolsas/WhatsApp Image 2025-11-07 at 11.49.45.jpeg'
  }
]
</script>
