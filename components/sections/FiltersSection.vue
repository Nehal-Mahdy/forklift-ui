<template>
    <div>
      <!-- Loading State -->
      <section v-if="filtersPending" class="w-full py-24 flex justify-center items-center">
        <span class="text-secondary text-sm animate-pulse">Loading filters...</span>
      </section>
  
      <!-- Filters UI -->
      <section v-else class="flex flex-wrap gap-4 mx-auto items-center md:px-[60px] px-4 py-8">
        <!-- Usage Intensity -->
        <UsageIntensityFilter
          :options="getUsageIntensityOptions"
          :selected="props.selectedUsageCircle"
          @select="onSelectUsage"
        />
  
        <!-- Transport Distance -->
        <TransportDistanceFilter
          :options="getTransportDistanceOptions"
          :selected="props.selectedTransportCircle"
          @select="onSelectTransport"
        />
  
        <!-- Load Capacity -->
        <LoadCapacityFilter
          :min="props.minCapacity"
          :max="props.maxCapacity"
          :range="dynamicCapacityRange"
          @update:min="emit('update:minCapacity', $event)"
          @update:max="emit('update:maxCapacity', $event)"
          @start-drag="startDrag"
          @stop-drag="stopDrag"
          @drag="onDrag"
          :dragging="isDragging"
          :drag-handle="dragHandle"
          :slider-ref="sliderRef"
        />
      </section>
  
      <!-- Active Filters Chips -->
      <section v-if="hasActiveFilters" class="flex flex-wrap gap-2 items-center justify-center">
        <!-- Usage -->
        <div
          v-if="props.selectedUsageCircle !== null"
          class="inline-flex items-center gap-2 border border-primary text-primary px-5 py-4 rounded-[5px] text-sm"
        >
          <span>Usage Intensity: {{ getUsageLabel(props.selectedUsageCircle) }}</span>
          <button @click="emit('update:selectedUsageCircle', null)" class="hover:scale-110">
            <Icon name="material-symbols:close-rounded" class="w-6 h-6" />
          </button>
        </div>
  
        <!-- Transport -->
        <div
          v-if="props.selectedTransportCircle !== null"
          class="inline-flex items-center gap-2 border border-primary text-primary px-5 py-4 rounded-[5px] text-sm"
        >
          <span>Transport Distance: {{ getTransportLabel(props.selectedTransportCircle) }}</span>
          <button @click="emit('update:selectedTransportCircle', null)" class="hover:scale-110">
            <Icon name="material-symbols:close-rounded" class="w-6 h-6" />
          </button>
        </div>
  
        <!-- Capacity -->
        <div
          v-if="props.minCapacity > dynamicCapacityRange.min || props.maxCapacity < dynamicCapacityRange.max"
          class="inline-flex items-center gap-2 border border-primary text-primary px-5 py-4 rounded-[5px] text-sm"
        >
          <span>Load Capacity: {{ props.maxCapacity }} Kg</span>
          <button @click="emit('resetCapacityFilter')" class="hover:scale-110">
            <Icon name="material-symbols:close-rounded" class="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useFilters } from '@/composables/useFilters'
  import type { CapacityRange } from '~/types/filter'
  import UsageIntensityFilter from '@/components/filters/UsageIntensityFilter.vue'
  import TransportDistanceFilter from '@/components/filters/TransportDistanceFilter.vue'
  import LoadCapacityFilter from '@/components/filters/LoadCapacityFilter.vue'
  
  const props = defineProps<{
    selectedUsageCircle: number | null
    selectedTransportCircle: number | null
    minCapacity: number
    maxCapacity: number
    capacityRange: CapacityRange
  }>()
  
  const emit = defineEmits<{
    'update:selectedUsageCircle': [value: number | null]
    'update:selectedTransportCircle': [value: number | null]
    'update:minCapacity': [value: number]
    'update:maxCapacity': [value: number]
    'resetCapacityFilter': []
  }>()
  
  const {
    pending: filtersPending,
    getUsageIntensityOptions,
    getTransportDistanceOptions,
    getLoadCapacityRange
  } = useFilters()
  
  const dynamicCapacityRange = computed(() => getLoadCapacityRange.value || props.capacityRange)
  
  const hasActiveFilters = computed(() =>
    props.selectedUsageCircle !== null ||
    props.selectedTransportCircle !== null ||
    props.minCapacity > dynamicCapacityRange.value.min ||
    props.maxCapacity < dynamicCapacityRange.value.max
  )
  
  // Label helpers
  const getUsageLabel = (index: number | null): string => {
    const opt = getUsageIntensityOptions.value.find(o => o.value === index)
    return opt?.name || 'Unknown'
  }
  
  const getTransportLabel = (index: number | null): string => {
    const opt = getTransportDistanceOptions.value.find(o => o.value === index)
    return opt?.name || 'Unknown'
  }
  
  // Circle select toggles
  const onSelectUsage = (index: number) => {
    emit('update:selectedUsageCircle', props.selectedUsageCircle === index ? null : index)
  }
  
  const onSelectTransport = (index: number) => {
    emit('update:selectedTransportCircle', props.selectedTransportCircle === index ? null : index)
  }
  
  // Drag logic
  const isDragging = ref(false)
  const dragHandle = ref<string | null>(null)
  const sliderRef = ref<HTMLElement | null>(null)
  
  const startDrag = (handle: string, event: MouseEvent) => {
    isDragging.value = true
    dragHandle.value = handle
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
    event.preventDefault()
  }
  
  const stopDrag = () => {
    isDragging.value = false
    dragHandle.value = null
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
  }
  
  const onDrag = (event: MouseEvent) => {
    if (!isDragging.value || !sliderRef.value) return
    const rect = sliderRef.value.getBoundingClientRect()
    const percent = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))
    const value = Math.round((percent / 100) * dynamicCapacityRange.value.max)
  
    if (dragHandle.value === 'min') {
      emit('update:minCapacity', Math.min(value, props.maxCapacity))
    } else if (dragHandle.value === 'max') {
      emit('update:maxCapacity', Math.max(value, props.minCapacity))
    }
  }
  </script>
  