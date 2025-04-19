<template>
    <header class="shadow-sm bg-blue-200">
        <div class="flex justify-between mx-auto p-3">
            <div class="order-first flex items-center">
                <div><strong><NuxtLink to="/">TonsGames</NuxtLink></strong></div>
            </div>
            <div class="flex gap-5">
                <div><Buttons Prompt="Login" Directory="/Login"/></div>
                <div><Buttons Prompt="Open Source Code" Directory="/Test"/></div>
            </div>
        </div>
    </header>

    <div>
        <slot />
    </div>
</template>

<script setup>

</script>