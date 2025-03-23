<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <BaseLayout>
        <section
            class="relative min-h-[40vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
            <img src="/your-background-image.jpg" alt="Sauna on water"
                class="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div class="relative z-10 max-w-2xl">
                <h1 class="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 mb-6 drop-shadow">
                    Experience the Floating Sauna
                </h1>
                <p class="text-lg sm:text-xl text-gray-800 mb-8 drop-shadow-sm">
                    A premium Swedish-style sauna experience, floating on the calm waters of Perth.
                </p>
                <router-link to="/booking" class="inline-block bg-swedishYellow text-black font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-out
hover:scale-[1.02] hover:brightness-110">
                    Book Your Session
                </router-link>
            </div>
        </section>
        <section class="bg-gray-50 py-16" data-aos="fade-up" data-aos-delay="100">
            <div class="max-w-5xl mx-auto px-6 text-center space-y-12">
                <h2 class="text-3xl font-bold text-swedishBlue">What Our Guests Say</h2>
                <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div class="bg-white shadow-md rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105
">
                        <p class="text-gray-700 italic">“Unreal experience. We floated at sunset and it was pure magic.”
                        </p>
                        <div class="mt-4 font-semibold text-sm">– Sarah M.</div>
                    </div>
                    <div class="bg-white shadow-md rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105
">
                        <p class="text-gray-700 italic">“Felt like we were in Sweden again. Beautiful, peaceful,
                            perfect.”</p>
                        <div class="mt-4 font-semibold text-sm">– Daniel & Elin</div>
                    </div>
                    <div class="bg-white shadow-md rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105
">
                        <p class="text-gray-700 italic">“I booked this as a gift and now I want to go every weekend.”
                        </p>
                        <div class="mt-4 font-semibold text-sm">– James D.</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-center py-12">
            <h2 class="text-2xl font-bold mb-4">Follow the Float</h2>
            <p class="text-gray-600 mb-4">Catch behind-the-scenes, sunsets, and stories on our socials.</p>
            <div class="flex justify-center gap-6 text-swedishBlue text-2xl">
                <a href="https://instagram.com/swedespot" target="_blank" class="hover:text-swedishYellow transition">📸
                    Instagram</a>
                <a href="https://tiktok.com/@swedespot" target="_blank" class="hover:text-swedishYellow transition">🎥
                    TikTok</a>
            </div>
        </section>



    </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue'
</script>