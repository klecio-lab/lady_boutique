<template>
  <section id="home" class="relative min-h-screen flex items-center">
    <!-- Imagem de fundo otimizada -->
    <NuxtImg
      src="/Dona1.jpg"
      alt="Lady Boutique Hero"
      class="absolute inset-0 w-full h-full object-cover object-[center_1%]"
      priority
      placeholder
    />
    
    <!-- Overlay escuro para melhorar leitura do texto -->
    <div class="absolute inset-0 bg-black/45"></div>

    <div class="container relative z-10 mx-auto px-4 py-16 text-white">
      <div class="max-w-2xl">
        <h2 class="text-4xl md:text-6xl font-heading font-bold mb-4">Sua bolsa, seu estilo</h2>
        <p class="text-xl md:text-2xl mb-8">Descubra a nova coleção da Lady Boutique. Bolsas modernas para atacado e varejo em Abreu e Lima.</p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#collection" class="bg-secondary text-white px-6 py-3 rounded-full font-medium text-center hover:bg-accent transition-all">
            Ver Coleção
          </a>
          <a
              href="https://wa.me/5581988704806?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20bolsas%20da%20Lady%20Boutique"
              class="border-2 border-white text-white px-6 py-3 rounded-full font-medium text-center hover:bg-white hover:text-gray-brand transition-all"
          >
            Compre Agora
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
