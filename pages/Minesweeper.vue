<template>
    <div class="container mx-auto grid">
        <div class="flex justify-center">
            <div>Select Difficulties: </div>
            <!-- <UselectMenu v-model="value" :items="items" class="w-48"/> -->
        </div>
        <div class="grid flex justify-center" :style="{ gridTemplateColumns: `repeat(${cols}, 2rem)` }">
                <button
                    v-for="cell in flatGrid"
                    :key="`${cell.row}-${cell.col}`"
                    class="w-8 h-8 text-sm border rounded flex items-center justify-center"
                    :class="{
                        'bg-gray-300': cell.isRevealed,
                        'bg-white': !cell.isRevealed,
                        'bg-red': cell.isMine && cell.isRevealed
                    }"
                    @click="handleClick(cell)" 
                    @contextmenu.prevent="placeFlag(cell)" 
                >
                    <span v-if="cell.isRevealed">
                        {{ cell.isMine ? '💣' : cell.adjacentMines || '' }}
                    </span>
                    <span v-if="cell.isFlaged">
                        🚩
                    </span>
                </button>
        </div>
        <div>
            <UButton>Button</UButton>
        </div>
        <div v-if="gameOver">
            <!-- <ModalDialog :show="modelOpen" @close="modelOpen = false">
                <p v-if="gameOver" class="text-red-600 font-bold mt-4">💥 Game Over!</p>
            </ModalDialog> -->
        </div>
        <button @click="testAlert()">Test</button>
    </div>
    
</template>

<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue'
    import {
    createGrid,
    placeMines,
    calculateAdjacents,
    revealCell,
    type Cell,
    MinesLocation
    } from '@/TSFolder/minesweeper'

    const modelOpen = ref(false)

    const items = ref(['Easy', 'Medium', 'Hard'])
    const value = ref('Medium')

    const rows = 8
    const cols = 8
    const mines = 10

    const grid = ref<Cell[][]>([])
    const gameOver = ref(false)

    onMounted(() => {
        grid.value = createGrid(rows, cols)
        placeMines(grid.value, mines)
        calculateAdjacents(grid.value)
    })

    const flatGrid = computed(() => grid.value.flat())

    function handleClick(cell: Cell) {
        if (cell.isMine) {
            gameOver.value = true
            revealAllMines()
            // Do a game over pop up menu
        }
        return revealCell(grid.value, cell.row, cell.col)
    }

    function revealAllMines() {
        MinesLocation.forEach(coordinate => {
            const x = coordinate[0]
            const y = coordinate[1]
            grid.value[x][y].isRevealed = true
        })
    }

    function placeFlag(cell: Cell) {
        if (!cell.isRevealed) cell.isFlaged = !cell.isFlaged
    }

    function testAlert() {
        alert("Clicked")
    }

</script>

<style scoped>
    .grid {
    display: grid;
    }
</style>
