<template>
  <header class="w-full relative">
    <div
      class="flex items-center justify-between lg:px-[60px] md:px-8 px-4 py-2 md:py-[25px] gap-4 md:gap-14 bg-white"
    >
      <!-- Logo -->
      <div class="lg:w-36 lg:h-12 md:w-28 md:h-12 w-24 h-10">
        <img
          src="/images/logo.png"
          class="w-full h-full"
          alt="logo"
          loading="eager"
          format="png"
        />

      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center">
        <!-- Navigation -->
        <nav
          class="flex gap-4 lg:gap-12 items-center lg:text-lg text-base text-secondary font-normal uppercase lg:mr-16 mr-4"
        >
          <a href="#" class="hover:text-primary transition">Products</a>
          <a href="#" class="hover:text-primary transition">Services</a>
          <a href="#" class="hover:text-primary transition">Training</a>
          <a href="#" class="hover:text-primary transition">About Us</a>
        </nav>

        <!-- Search & CTA -->
        <div class="flex items-center lg:gap-16 gap-4">
          <button class="text-secondary hover:text-primary transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0671 20.1643L15.7241 15.8213M15.7241 15.8213C16.467 15.0784 17.0563 14.1964 17.4583 13.2258C17.8604 12.2552 18.0673 11.2149 18.0673 10.1643C18.0673 9.11367 17.8604 8.07335 17.4583 7.10272C17.0563 6.13209 16.467 5.25016 15.7241 4.50727C14.9812 3.76438 14.0993 3.17509 13.1286 2.77304C12.158 2.37099 11.1177 2.16406 10.0671 2.16406C9.0165 2.16406 7.97618 2.37099 7.00555 2.77304C6.03492 3.17509 5.15299 3.76438 4.4101 4.50727C2.90977 6.0076 2.06689 8.04248 2.06689 10.1643C2.06689 12.2861 2.90977 14.3209 4.4101 15.8213C5.91043 17.3216 7.94531 18.1645 10.0671 18.1645C12.1889 18.1645 14.2238 17.3216 15.7241 15.8213Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- CTA Button -->
          <button
            class="bg-primary rounded-[18px] text-white lg:text-sm text-xs lg:font-bold font-semibold uppercase lg:px-[27px] px-4 py-4 hover:bg-red-800 transition"
          >
            Get Quote
          </button>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <!-- Mobile Search Button -->
        <button class="text-secondary hover:text-primary transition">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0671 20.1643L15.7241 15.8213M15.7241 15.8213C16.467 15.0784 17.0563 14.1964 17.4583 13.2258C17.8604 12.2552 18.0673 11.2149 18.0673 10.1643C18.0673 9.11367 17.8604 8.07335 17.4583 7.10272C17.0563 6.13209 16.467 5.25016 15.7241 4.50727C14.9812 3.76438 14.0993 3.17509 13.1286 2.77304C12.158 2.37099 11.1177 2.16406 10.0671 2.16406C9.0165 2.16406 7.97618 2.37099 7.00555 2.77304C6.03492 3.17509 5.15299 3.76438 4.4101 4.50727C2.90977 6.0076 2.06689 8.04248 2.06689 10.1643C2.06689 12.2861 2.90977 14.3209 4.4101 15.8213C5.91043 17.3216 7.94531 18.1645 10.0671 18.1645C12.1889 18.1645 14.2238 17.3216 15.7241 15.8213Z"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Hamburger Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="text-secondary hover:text-primary transition p-1"
          :class="{ 'text-primary': isMobileMenuOpen }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-transform duration-300"
            :class="{ 'rotate-90': isMobileMenuOpen }"
          >
            <path
              v-if="!isMobileMenuOpen"
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              v-else
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      class="md:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50"
      :class="{
        'translate-x-0': isMobileMenuOpen,
        'translate-x-full': !isMobileMenuOpen,
      }"
    >
      <!-- Mobile Menu Header -->
      <div
        class="flex items-center justify-between p-6 border-b border-gray-200"
      >
        <div class="w-28 h-10">
          <img src="/public/images/logo.png" class="w-full h-full" alt="logo" />
        </div>
        <button
          @click="toggleMobileMenu"
          class="text-secondary hover:text-primary transition p-1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Links -->
      <nav class="flex flex-col p-6 space-y-6">
        <a
          href="#"
          class="text-lg text-secondary font-normal uppercase hover:text-primary transition border-b border-gray-100 pb-4"
          @click="closeMobileMenu"
        >
          Products
        </a>
        <a
          href="#"
          class="text-lg text-secondary font-normal uppercase hover:text-primary transition border-b border-gray-100 pb-4"
          @click="closeMobileMenu"
        >
          Services
        </a>
        <a
          href="#"
          class="text-lg text-secondary font-normal uppercase hover:text-primary transition border-b border-gray-100 pb-4"
          @click="closeMobileMenu"
        >
          Training
        </a>
        <a
          href="#"
          class="text-lg text-secondary font-normal uppercase hover:text-primary transition border-b border-gray-100 pb-4"
          @click="closeMobileMenu"
        >
          About Us
        </a>
      </nav>

      <!-- Mobile CTA Button -->
      <div class="p-6 mt-6">
        <button
          class="w-full bg-primary rounded-[18px] text-white text-sm font-bold uppercase py-4 hover:bg-red-800 transition"
          @click="closeMobileMenu"
        >
          Get Quote
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside or on escape key
const handleKeydown = (event) => {
  if (event.key === "Escape" && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Add event listeners
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
