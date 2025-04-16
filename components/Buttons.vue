<template>
    <button class="bg-red-400">
        <NuxtLink :to="Directory">{{ Prompt }}</NuxtLink>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        Prompt: string,
        Directory: string
    }>()
</script>