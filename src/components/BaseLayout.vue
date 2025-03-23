<template>
  <div class="min-h-screen flex flex-col font-sans bg-white text-gray-900">
    <!-- Header -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/"
          class="text-2xl font-bold tracking-tight inline-block transition-transform duration-300 ease-out hover:scale-[1.05]">
          <span class="text-swedishBlue">Swede</span><span class="text-swedishYellow">Spot</span>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-8 text-sm font-medium">
          <router-link to="/" class="hover:text-swedishBlue transition-all duration-300 ease-out hover:brightness-110"
            active-class="text-swedishBlue underline underline-offset-4">Home</router-link>
          <router-link to="/booking"
            class="hover:text-swedishBlue transition-all duration-300 ease-out hover:brightness-110"
            active-class="text-swedishBlue underline underline-offset-4">Booking</router-link>
          <router-link to="/about"
            class="hover:text-swedishBlue transition-all duration-300 ease-out hover:brightness-110"
            active-class="text-swedishBlue underline underline-offset-4">About</router-link>
          <router-link to="/contact"
            class="hover:text-swedishBlue transition-all duration-300 ease-out hover:brightness-110"
            active-class="text-swedishBlue underline underline-offset-4">Contact</router-link>
        </nav>

        <!-- Mobile Hamburger -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-3xl focus:outline-none">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <!-- Mobile Nav -->
      <transition name="fade">
        <nav v-if="menuOpen"
          class="md:hidden px-4 pt-4 pb-6 flex flex-col gap-4 text-sm font-medium bg-white border-t shadow-md">
          <router-link @click="menuOpen = false" to="/" class="hover:text-swedishBlue transition"
            active-class="text-swedishBlue underline underline-offset-4">Home</router-link>
          <router-link @click="menuOpen = false" to="/booking" class="hover:text-swedishBlue transition"
            active-class="text-swedishBlue underline underline-offset-4">Booking</router-link>
          <router-link @click="menuOpen = false" to="/about" class="hover:text-swedishBlue transition"
            active-class="text-swedishBlue underline underline-offset-4">About</router-link>
          <router-link @click="menuOpen = false" to="/contact" class="hover:text-swedishBlue transition"
            active-class="text-swedishBlue underline underline-offset-4">Contact</router-link>
        </nav>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="text-sm text-gray-500 text-center py-6 border-t">
      © {{ new Date().getFullYear() }} SwedeSpot Floating Sauna. Float. Sauna. Relax.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
