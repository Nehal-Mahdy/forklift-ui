<template>
  <footer class="bg-secondary text-white py-12 mt-16">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Toyota Logo" class="h-8 w-auto" />
            <span class="text-lg font-semibold">Toyota Material Handling</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            Leading manufacturer of forklifts and material handling equipment worldwide.
          </p>
        </div>

        <!-- Products -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Products</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a href="#" class="hover:text-primary transition-colors">Electric Forklifts</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Diesel Forklifts</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Reach Trucks</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Order Pickers</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Support</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a href="#" class="hover:text-primary transition-colors">Service & Maintenance</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Parts & Accessories</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Training</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Contact</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <p class="flex items-center space-x-2">
              <Icon name="material-symbols:call" class="w-4 h-4" />
              <span>+1 (800) 123-4567</span>
            </p>
            <p class="flex items-center space-x-2">
              <Icon name="material-symbols:mail-outline" class="w-4 h-4" />
              <span>info@toyota-mh.com</span>
            </p>
            <p class="flex items-center space-x-2">
              <Icon name="material-symbols:location-on-outline" class="w-4 h-4" />
              <span>Industrial District, City</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Social Media & Links -->
      <div class="border-t border-gray-700 pt-8 mb-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Social Media -->
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-primary transition-colors">
              <Icon name="ic:round-facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-primary transition-colors">
              <Icon name="ic:round-alternate-email" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-primary transition-colors">
              <Icon name="ic:round-business" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-primary transition-colors">
              <Icon name="ic:round-play-arrow" class="w-6 h-6" />
            </a>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-300">
            <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p class="text-sm text-gray-400">
            &copy; {{ currentYear }} Toyota Material Handling. All rights reserved.
          </p>
          <div class="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
            <p class="text-sm text-gray-400">
              Built with Vue.js & Nuxt.js
            </p>
            <p class="text-sm text-gray-500">
              Developed by <span class="text-primary font-medium">Nehal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Get current year dynamically
const currentYear = computed(() => new Date().getFullYear())
</script>
