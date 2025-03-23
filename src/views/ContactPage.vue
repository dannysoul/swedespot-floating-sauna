<template>
    <BaseLayout>
        <section class="max-w-2xl mx-auto px-6 py-12 text-center space-y-6">
            <h1 class="text-4xl font-bold text-swedishBlue">Get in Touch</h1>
            <p class="text-gray-700">Have questions, custom booking requests, or media inquiries? Reach out below.</p>

            <form class="space-y-4 text-left">
                <div>
                    <label class="block text-sm font-medium mb-1">Your Name</label>
                    <input type="text"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none"
                        placeholder="Name" />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Email Address</label>
                    <input type="email"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none"
                        placeholder="you@example.com" />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Message</label>
                    <textarea rows="4"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-swedishBlue outline-none"
                        placeholder="Tell us what's on your mind..."></textarea>
                </div>

                <button type="submit"
                    class="w-full bg-swedishYellow text-black font-semibold py-3 rounded-lg hover:brightness-105 transition">
                    Send Message
                </button>
            </form>
        </section>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue'
</script>