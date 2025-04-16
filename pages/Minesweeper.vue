<template>
    <div>
        <div>
            <h1>Minesweeper</h1>
        </div>
        <div>
            <button
                class="w-10 h-10 border border-gray-400 flex items-center justify-center text-sm font-bold"
                :class="{
                    
                }"
            >
                <span></span>
            </button>
        </div>
        <div>
            <div>Select Difficulty</div>
            <div>
                <select v-model="Selected">
                    <option disabled value="">{{ Selected }}</option>
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
    let selected = ref('Please Select One')
</script>