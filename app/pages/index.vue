<template>
  <div class="font-body text-gray-brand">
    <HeroSection />
    <BenefitsSection />
    <CollectionSection />
    <SegmentsSection />
    <MosaicSection />
    <TestimonialsSection />
    <ContactSection />
    <InstagramSection />
    <NewsletterSection />
    <WhatsAppButton />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import BenefitsSection from '~/components/sections/BenefitsSection.vue'
import CollectionSection from '~/components/sections/CollectionSection.vue'
import SegmentsSection from '~/components/sections/SegmentsSection.vue'
import MosaicSection from '~/components/sections/MosaicSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import InstagramSection from '~/components/sections/InstagramSection.vue'
import NewsletterSection from '~/components/sections/NewsletterSection.vue'
import WhatsAppButton from '~/components/WhatsAppButton.vue'
import Footer from '~/components/Footer.vue'

// Smooth scrolling for anchor links
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>
