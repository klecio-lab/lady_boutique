<template>
  <section class="py-16 bg-light">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-heading font-bold text-center mb-12">Por que escolher a Lady Boutique?</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="benefit in benefits" :key="benefit.title" class="text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
          <div class="bg-secondary text-gray-brand w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <i :class="`fas ${benefit.icon} text-xl`"></i>
          </div>
          <h3 class="text-xl font-heading font-semibold mb-2">{{ benefit.title }}</h3>
          <p class="text-gray-brand">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: 'fa-gem',
    title: 'Estoque Selecionado',
    description: 'Bolsas das tendências mais atuais, cuidadosamente selecionadas para você.'
  },
  {
    icon: 'fa-tags',
    title: 'Preços Competitivos',
    description: 'Melhores preços para atacado e varejo, sempre com qualidade garantida.'
  },
  {
    icon: 'fa-user-friends',
    title: 'Atendimento Personalizado',
    description: 'Atendimento direto e personalizado para atender suas necessidades.'
  },
  {
    icon: 'fa-shipping-fast',
    title: 'Entrega Rápida',
    description: 'Envios rápidos e confiáveis para toda a região de Abreu e Lima.'
  }
]
</script>
