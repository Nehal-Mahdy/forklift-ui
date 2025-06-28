<template>
    <div class="w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)] bg-[#EFEFF0] rounded-[5px] shadow-subtle p-4 space-y-2">
      <!-- Title with Icon -->
      <div class="flex items-center gap-3">
        <h3 class="font-normal text-secondary text-sm">Usage Intensity</h3>
        <div class="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
          <Icon name="ic:round-question-mark" class="w-3 h-3 text-[#EFEFF0]" />
        </div>
      </div>
  
      <!-- Steps -->
      <div class="relative w-full pt-4 pb-6">
        <div class="absolute top-[29px] left-0 right-1 h-[3px] bg-[#DFDFDF]"></div>
  
        <div class="flex justify-between items-center w-full relative z-10">
          <div v-for="option in options" :key="option.id" class="flex flex-col items-center gap-1">
            <button
              @click="$emit('select', option.value)"
              class="w-7 h-7 rounded-full border-2 border-[#DFDFDF] transition-colors cursor-pointer"
              :class="[
                selected === option.value ? 'bg-primary border-primary' : 'bg-[#DFDFDF]',
                option.value === 1 || option.value === 3 || option.value === 5 ? 'mb-2' : 'mb-8'
              ]"
            ></button>
            <span v-if="option.value === 1 || option.value === 3 || option.value === 5" class="text-sm text-secondary font-normal font-roboto">
              {{ option.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { FilterOption } from '~/types/filter'

  interface Props {
    options: FilterOption[]
    selected: number | null
  }

  defineProps<Props>()
  defineEmits<{
    select: [value: number]
  }>()
  </script>
  