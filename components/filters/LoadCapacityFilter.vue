<template>
  <div
    class="w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)] bg-[#EFEFF0] rounded-[5px] shadow-subtle p-4 space-y-2"
  >
    <div class="flex items-center gap-3">
      <h3 class="font-normal text-secondary text-sm">Load Capacity</h3>
      <div
        class="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white"
      >
        <Icon name="ic:round-question-mark" class="w-3 h-3 text-[#EFEFF0]" />
      </div>
    </div>

    <div class="relative py-4 px-2">
      <div
        ref="sliderRef"
        class="relative h-[10px] rounded-full cursor-pointer"
        style="background-color: #ff141433"
      >
        <div
          class="absolute h-[10px] bg-primary rounded-full"
          :style="{
            left: minPosition + '%',
            width: maxPosition - minPosition + '%',
          }"
        ></div>

        <div
          class="shadow-subtle absolute top-1/2 w-[20px] h-[20px] bg-white rounded-full cursor-grab transform -translate-y-1/2 -translate-x-1/2 z-10 hover:scale-110 transition-transform flex items-center justify-center"
          :style="{ left: minPosition + '%', border: '3.34px solid #FFFFFF' }"
          @mousedown="startDrag('min', $event)"
        >
          <div class="w-[12px] h-[12px] bg-primary rounded-full"></div>
        </div>

        <div
          class="shadow-subtle absolute top-1/2 w-[20px] h-[20px] bg-white rounded-full cursor-grab transform -translate-y-1/2 -translate-x-1/2 z-10 hover:scale-110 transition-transform flex items-center justify-center"
          :style="{ left: maxPosition + '%', border: '3.34px solid #FFFFFF' }"
          @mousedown="startDrag('max', $event)"
        >
          <div class="w-[12px] h-[12px] bg-primary rounded-full"></div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 items-center justify-between px-1 pb-2.5">
      <div class="relative w-full">
        <input
          type="number"
          :value="min"
          @input="updateMin"
          :min="range.min"
          :max="range.max"
          class="bg-[#EFEFF0] text-secondary w-full h-[40px] px-3 py-2 border border-black rounded-lg text-sm font-medium text-center focus:border-primary focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
        />
        <span
          class="absolute right-3 top-[48%] transform -translate-y-1/2 text-sm font-medium text-secondary pointer-events-none"
          >kg</span
        >
      </div>
      <div class="flex justify-center items-center px-2">
        <span class="text-secondary font-medium w-full">–</span>
      </div>
      <div class="relative w-full">
        <input
          type="number"
          :value="max"
          @input="updateMax"
          :min="range.min"
          :max="range.max"
          class="bg-[#EFEFF0] text-secondary w-full h-[40px] px-3 py-2 border border-black rounded-lg text-sm font-medium text-center focus:border-primary focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
        />
        <span
          class="absolute right-3 top-[48%] transform -translate-y-1/2 text-sm font-medium text-secondary pointer-events-none"
          >kg</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { CapacityRange } from "~/types/filter";

interface Props {
  min: number;
  max: number;
  range: CapacityRange;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  "update:min": [value: number];
  "update:max": [value: number];
}>();

const sliderRef = ref<HTMLElement | null>(null);
const isDragging = ref<boolean>(false);
const dragHandle = ref<string | null>(null);

const minPosition = computed(() => {
  const position = (props.min / props.range.max) * 100;
  return Math.max(0, Math.min(100, position));
});

const maxPosition = computed(() => {
  const position = (props.max / props.range.max) * 100;
  return Math.max(0, Math.min(100, position));
});

const updateMin = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = parseInt(target.value) || 0;
  // Allow any value during typing, but emit the actual value
  emit("update:min", value);
};

const updateMax = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = parseInt(target.value) || 0;
  // Allow any value during typing, but emit the actual value
  emit("update:max", value);
};

const startDrag = (handle: string, event: MouseEvent) => {
  isDragging.value = true;
  dragHandle.value = handle;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  event.preventDefault();
};

const onDrag = (event: MouseEvent) => {
  if (!isDragging.value || !sliderRef.value) return;
  const rect = sliderRef.value.getBoundingClientRect();
  const percentage = Math.max(
    0,
    Math.min(100, ((event.clientX - rect.left) / rect.width) * 100)
  );
  const value = Math.round((percentage / 100) * props.range.max);

  if (dragHandle.value === "min")
    emit("update:min", Math.min(value, props.max));
  else if (dragHandle.value === "max")
    emit("update:max", Math.max(value, props.min));
};

const stopDrag = () => {
  isDragging.value = false;
  dragHandle.value = null;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};
</script>
