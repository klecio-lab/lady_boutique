<template>
  <div class="bg-white rounded-lg overflow-hidden product-card transition-all">
    <div class="h-64 bg-cover bg-center" :style="`background-image: url('${product.image}');`"></div>
    <div class="p-6">
      <h3 class="text-xl font-heading font-semibold mb-2">{{ product.name }}</h3>
      <p class="text-gray-brand mb-4">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-secondary">{{ product.price }}</span>
        <a
            :href="`https://wa.me/5581999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20${product.name}`"
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
