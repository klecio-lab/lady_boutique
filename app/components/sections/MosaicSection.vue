<template>
  <section id="mosaic" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-heading font-bold text-center mb-4 text-gray-brand">Nossa História</h2>
      <p class="text-center text-gray-brand font-body mb-12 max-w-2xl mx-auto">
        Conheça a Lady Boutique e a paixão por bolsas que nos move
      </p>

      <!-- Mosaic Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <!-- Image 1 - Large -->
        <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg shadow-lg group">
          <NuxtImg
            src="/Dona1.jpg"
            alt="Lady Boutique - Nossa Loja"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="sm:100vw md:66vw lg:66vw"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-heading font-bold text-2xl mb-2">Nossa Loja</h3>
              <p class="text-white font-body">Localizada em Abreu e Lima - PE</p>
            </div>
          </div>
        </div>

        <!-- Image 2 - Small Top -->
        <div class="relative overflow-hidden rounded-lg shadow-lg group">
          <NuxtImg
            src="/Dona2.jpg"
            alt="Lady Boutique - Atendimento"
            class="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="sm:100vw md:33vw lg:33vw"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white font-heading font-bold text-lg mb-1">Atendimento</h3>
              <p class="text-white font-body text-sm">Personalizado</p>
            </div>
          </div>
        </div>

        <!-- Image 3 - Small Bottom -->
        <div class="relative overflow-hidden rounded-lg shadow-lg group">
          <NuxtImg
            src="/Dona3.jpg"
            alt="Lady Boutique - Qualidade"
            class="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="sm:100vw md:33vw lg:33vw"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white font-heading font-bold text-lg mb-1">Qualidade</h3>
              <p class="text-white font-body text-sm">Produtos Selecionados</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <a 
          href="#contact" 
          class="inline-block bg-secondary text-gray-brand font-body font-semibold px-8 py-3 rounded-full hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Visite Nossa Loja
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Mosaic section showcasing the store
</script>

<style scoped>
/* Additional styles if needed */
</style>
