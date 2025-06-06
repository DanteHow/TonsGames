<template>
    <button class="text-white bg-[#12b488] px-3 py-2 rounded-md text-sm">
        <NuxtLink :to="Directory">{{ Prompt }}</NuxtLink>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        Prompt: string,
        Directory: string
    }>()
</script>