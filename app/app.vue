<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const title = 'Lady Boutique - Bolsas Femininas em Abreu e Lima'
const description = 'Lady Boutique - Sua loja de bolsas femininas em Abreu e Lima - PE. Atacado e varejo com qualidade e preço justo. Confira nossa coleção!'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/Dona1.jpg',
  twitterCard: 'summary_large_image',
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
