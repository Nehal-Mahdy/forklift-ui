<template>
  <div>
    <NuxtLayout>
      <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.statusCode }}</h1>
          <p class="text-xl text-gray-600 mb-8">{{ error.statusMessage }}</p>
          <div class="space-y-4">
            <p class="text-gray-500">
              {{ error.statusCode === 404 ? "The page you're looking for doesn't exist." : "Something went wrong." }}
            </p>
            <div class="space-x-4">
              <button
                @click="handleError"
                class="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
              >
                Go Home
              </button>
              <button
                @click="clearError"
                class="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number
  statusMessage: string
}

const props = defineProps<{
  error: NuxtError
}>()

// Don't show error page for DevTools requests
if (process.client && props.error.statusCode === 404) {
  const currentPath = useRoute().path
  if (currentPath.includes('.well-known/appspecific')) {
    // Silently ignore DevTools requests
    await navigateTo('/')
  }
}

const handleError = async () => {
  await navigateTo('/')
}

const clearError = async () => {
  await clearError()
}
</script>
