<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <HeroSection />

    <!-- Filters Section -->
    <FiltersSection
      :selected-usage-circle="selectedUsageCircle"
      :selected-transport-circle="selectedTransportCircle"
      :min-capacity="minCapacity"
      :max-capacity="maxCapacity"
      :capacity-range="capacityRange"
      @update:selected-usage-circle="selectedUsageCircle = $event"
      @update:selected-transport-circle="selectedTransportCircle = $event"
      @update:min-capacity="minCapacity = $event"
      @update:max-capacity="maxCapacity = $event"
      @reset-capacity-filter="resetCapacityFilter"
    />

    <!-- Products Grid -->
    <ProductSection
      :filtered-products="filteredProducts"
      :pending="false"
      :error="false"
      :clear-all-filters="clearAllFilters"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ProductSection from "~/components/sections/ProductsSection.vue";
import FiltersSection from "~/components/sections/FiltersSection.vue";
import HeroSection from "~/components/sections/HeroSection.vue";
import { useProductList } from "@/composables/useProducts";
import { useFilters } from "@/composables/useFilters";
import type { CapacityRange } from "~/types/filter";

// Reactive filter state
const selectedUsageCircle = ref<number | null>(null);
const selectedTransportCircle = ref<number | null>(null);
const minCapacity = ref<number>(0);
const maxCapacity = ref<number>(7000);

// Fetch products + filters
const { products, pending, error } = await useProductList();
const { getLoadCapacityRange } = useFilters();

// Range from API fallback
const capacityRange = computed(
  () => getLoadCapacityRange.value || { min: 0, max: 7000 }
);

// Apply filters locally
const filteredProducts = computed(() =>
  products.value.filter((product) => {
    if (
      selectedUsageCircle.value !== null &&
      product.usageIntensity !== selectedUsageCircle.value
    )
      return false;
    if (
      selectedTransportCircle.value !== null &&
      product.transportDistance !== selectedTransportCircle.value
    )
      return false;
    if (
      minCapacity.value > capacityRange.value.min ||
      maxCapacity.value < capacityRange.value.max
    ) {
      if (
        product.loadCapacity < minCapacity.value ||
        product.loadCapacity > maxCapacity.value
      )
        return false;
    }
    return true;
  })
);

const resetCapacityFilter = () => {
  const range = capacityRange.value;
  minCapacity.value = range.min;
  maxCapacity.value = range.max;
};

const clearAllFilters = () => {
  selectedUsageCircle.value = null;
  selectedTransportCircle.value = null;
  resetCapacityFilter();
};

// Head
useHead({
  title: "Product Ranges - Toyota Material Handling",
  meta: [
    {
      name: "description",
      content:
        "Explore our complete range of Toyota forklifts and material handling equipment",
    },
  ],
});
</script>
