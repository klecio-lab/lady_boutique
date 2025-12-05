<template>
  <div class="h-full bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden">
    <!-- Imagem com Zoom -->
    <div class="h-80 overflow-hidden relative">
      <NuxtImg 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    
    <!-- Conteúdo Flexível -->
    <div class="p-6 flex flex-col flex-1">
      <h3 class="text-xl font-heading font-semibold mb-2">{{ product.name }}</h3>
      <p class="text-gray-brand mb-4 flex-1">{{ product.description }}</p>
      
      <!-- Footer alinhado -->
      <div class="flex justify-between items-center mt-auto">
        <span class="text-2xl font-bold text-secondary">{{ product.price }}</span>
        <a
            :href="`https://wa.me/5581988704806?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20${product.name}`"
            class="bg-primary text-gray-brand px-4 py-2 rounded-full text-sm hover:bg-secondary transition-all"
        >
          Comprar
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  name: string
  description: string
  price: string
  image: string
}

defineProps<{
  product: Product
}>()
</script>
