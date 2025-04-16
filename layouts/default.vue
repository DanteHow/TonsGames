<template>
    <header class="shadow-sm bg-blue-200">
        <div class="container bg-gray-400 flex justify-between mx-auto">
            <div class="order-first">
                <div><NuxtLink to="/">TonsGames</NuxtLink></div>
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