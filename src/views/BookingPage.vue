<template>
    <BaseLayout>
        <section
            class="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12 bg-white text-gray-900">
            <!-- Left Info Panel -->
            <div class="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <h1 class="text-4xl font-bold text-swedishBlue">Book Your Experience</h1>
                <p class="text-lg text-gray-700">
                    Choose your preferred date and time, group size, and any extras.
                </p>
                <img src="/booking-preview.jpg" alt="Floating Sauna Preview"
                    class="w-full rounded-2xl shadow-md max-w-md mx-auto lg:mx-0" />
            </div>

            <!-- Right Booking Form -->
            <div class="w-full lg:w-1/2">
                <form class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 max-w-xl mx-auto">
                    <div>
                        <label class="block mb-1 font-medium text-sm">Full Name</label>
                        <input type="text" placeholder="Your name"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none" />
                    </div>

                    <div>
                        <label class="block mb-1 font-medium text-sm">Email Address</label>
                        <input type="email" placeholder="you@example.com"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none" />
                    </div>

                    <div class="flex gap-4">
                        <div class="w-1/2">
                            <label class="block mb-1 font-medium text-sm">Date</label>
                            <input type="date"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none" />
                        </div>
                        <div class="w-1/2">
                            <label class="block mb-1 font-medium text-sm">Time</label>
                            <input type="time"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none" />
                        </div>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium text-sm">Group Size</label>
                        <input type="number" min="1" max="12" placeholder="e.g. 4"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none" />
                    </div>

                    <div>
                        <label class="block mb-1 font-medium text-sm">Extras</label>
                        <div class="flex flex-wrap gap-4">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" class="accent-swedishBlue" />
                                <span>Towels</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" class="accent-swedishBlue" />
                                <span>Charcuterie Board</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" class="accent-swedishBlue" />
                                <span>Wine / Drinks</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit"
                        class="w-full bg-swedishYellow text-black font-semibold py-3 rounded-lg hover:brightness-105 transition">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </section>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue'
</script>