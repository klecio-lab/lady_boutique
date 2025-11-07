<template>
  <section id="testimonials" class="py-16 testimonial-bg">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-brand">O que nossas clientes dizem</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <h4 class="font-heading font-semibold">{{ testimonial.name }}</h4>
              <div class="flex text-yellow-400">
                <i v-for="n in 5" :key="n" class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-brand font-body">{{ testimonial.text }}</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div class="bg-white inline-block px-6 py-3 rounded-full shadow-md">
          <span class="font-bold text-secondary">+8.000 clientes satisfeitas</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Maria Silva',
    text: '"Comprei várias bolsas para revender e todas são de ótima qualidade. Minhas clientes adoraram!"',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Ana Santos',
    text: '"Adorei a bolsa que comprei! A qualidade é excelente e o preço é justo. Voltarei com certeza."',
    image: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Carla Mendes',
    text: '"Atendimento excelente e produtos de qualidade. Como lojista, recomendo a Lady Boutique!"',
    image: 'https://i.pravatar.cc/150?img=44'
  }
]
</script>
