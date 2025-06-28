<template>
  <div class="product-card py-5 flex items-center justify-center flex-col gap-5 rounded-[10px] shadow-subtle overflow-hidden">
    <div class="w-48 h-48">
      <img
        :src="product.image"
        :alt="`${product.name} ${product.code}`"
        class="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col gap-2 justify-center text-center">
      <h3 class="text-primary font-medium text-base uppercase">
        {{ product.name }} 
      </h3>
      <p class="text-secondary text-sm font-medium uppercase">
        {{ product.code }}
      </p>
      <p class="text-sm text-secondary font-medium uppercase">
        CAPACITY:
        <span class="text-primary">{{ product.capacity }}</span>
      </p>
    </div>
    <button
     
      class="bg-primary hover:bg-red-800 text-white px-7 py-4 rounded-[18px] text-sm font-bold transition-all duration-200 uppercase"
    >
      VIEW PRODUCT
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

