<script setup>
const handleClick = () => {
  alert('Button clicked!')
}
</script>

<template>
  <div class="p-8 space-y-6">
    <UCard>
      <template #header>
        <h1 class="text-xl font-bold">Nuxt UI Test</h1>
      </template>

      <p class="text-gray-700">This is a sample card using Nuxt UI components.</p>

      <template #footer>
        <UButton color="primary" @click="handleClick">
          Click Me
        </UButton>
      </template>
    </UCard>
  </div>
</template>
