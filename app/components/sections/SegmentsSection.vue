<template>
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-heading font-bold text-center mb-12">Para Todos os Públicos</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="segment in segments" :key="segment.title" class="text-center p-8 rounded-lg bg-light transition-all hover:shadow-lg">
          <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <i :class="`fas ${segment.icon} text-gray-brand text-2xl`"></i>
          </div>
          <h3 class="text-xl font-heading font-semibold mb-4">{{ segment.title }}</h3>
          <p class="text-gray-brand mb-6">{{ segment.description }}</p>
          <a :href="segment.link" class="text-secondary font-medium hover:text-accent transition-all">{{ segment.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const segments = [
  {
    icon: 'fa-female',
    title: 'Para Mulheres',
    description: 'Bolsas que combinam com seu estilo único e personalidade. Encontre o modelo perfeito para cada ocasião.',
    link: '#collection',
    linkText: 'Ver opções'
  },
  {
    icon: 'fa-store',
    title: 'Para Lojistas',
    description: 'Condições especiais para atacado. Aumente seu lucro com nossas bolsas de alta qualidade e preço competitivo.',
    link: '#contact',
    linkText: 'Condições'
  },
  {
    icon: 'fa-boxes',
    title: 'Kits Atacado',
    description: 'Pacotes especiais com mix de modelos para revenda. Ideal para iniciar ou renovar seu estoque.',
    link: '#contact',
    linkText: 'Ver kits'
  }
]
</script>
