<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-include-user'
  }
])


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
      <div>
        <UDropdownMenu
          :items="items"
          :content:="{
            align:'start',
            side:'bottom',
            sideoffset: 8
          }"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton label="Open" icon="i-lucide-menu" color="neutral" variat="outline"/>
        </UDropdownMenu>
      </div>

      <template #footer>
        <UButton color="primary" @click="handleClick">
          Click Me
        </UButton>
      </template>
    </UCard>
  </div>
</template>