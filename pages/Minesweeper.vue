<template>
    <div class="container mx-auto flex flex-col items-center p-5">
        <div class="p-4">
            <p class="text-3xl"><strong>Minesweeper</strong></p>
        </div>
        <div>
            <button
                class="w-10 h-10 border border-gray-400 flex items-center justify-center text-sm font-bold"
                :class="{
                    
                }"
            >
                <span>Bomb</span>
            </button>
        </div>
        <div>
            <div>Select Difficulty</div>
            <div>
                <select v-model="Difficulties">
                    <option disabled :value=Difficulties>{{ Difficulties }}</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
        </div>
        <div>
            <Buttons Prompt="Home" Directory="/"/>
        </div>
    </div>
</template>

<script setup>
    let Difficulties = ref('Medium')
</script>