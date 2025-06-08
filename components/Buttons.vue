<template>
    <button class="btn">
        <NuxtLink :to="Directory">{{ Prompt }}</NuxtLink>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        Prompt: string,
        Directory: string
    }>()
</script>