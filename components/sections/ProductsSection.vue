<template>
    <section class="py-8">
      <div class="md:px-[60px] px-4">
        <!-- Loader -->
        <div v-if="pending" class="text-center py-10 text-secondary">
          Loading products...
        </div>
  
        <div v-else-if="error" class="text-center py-10 text-red-600">
          Failed to load products.
        </div>
  
        <!-- Product Grid -->
        <TransitionGroup
          name="product"
          tag="div"
          class="flex flex-wrap justify-center gap-[30px]"
          appear
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            class="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
          />
        </TransitionGroup>
  
        <!-- No Results Fallback -->
        <div v-if="filteredProducts.length === 0" class="text-center py-12">
          <div class="text-gray-400 mb-4">
            <Icon name="ic:round-search-off" class="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 class="text-lg font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p class="text-gray-500 mb-4">
            Try adjusting your filters to see more results
          </p>
          <button
            @click="clearAllFilters"
            class="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '@/types/product';
  import ProductCard from '@/components/ui/cards/Product.vue';
  
  defineProps<{
    filteredProducts: Product[];
    pending: boolean;
    error: boolean | null;
    clearAllFilters: () => void;
  }>();


  </script>