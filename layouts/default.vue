<template>
    <header class="shadow-sm bg-blue-200">
        <div class="container bg-gray-400 flex justify-between mx-auto">
            <div class="order-first"><Buttons Prompt="MiniGames" Directory="/"/></div>
            <div class="flex">
                <div><Buttons Prompt="Login" Directory="/Login"/></div>
                <div><Buttons Prompt="Open Source Code" Directory="/Test"/></div>
            </div>
        </div>
    </header>

    <div>
        <slot />
    </div>

    <footer>
        <div>
            <h2>This is the footer</h2>
        </div>
    </footer>
</template>

<script setup>

</script>