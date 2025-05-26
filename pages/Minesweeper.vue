<template>
    <div class="container mx-auto grid">
        <div class="flex justify-center">
            <div>Select Difficulties: </div>
            <!-- <UselectMenu v-model="value" :items="items" class="w-48"/> -->
        </div>
        <div class="grid gap-1 flex justify-center" :style="{ gridTemplateColumns: `repeat(${cols}, 2rem)` }">
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
                >
                    <span v-if="cell.isRevealed">
                        {{ cell.isMine ? '💣' : cell.adjacentMines || '' }}
                    </span>
                </button>
        </div>
        <p v-if="gameOver" class="text-red-600 font-bold mt-4">💥 Game Over!</p>
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
    type Cell
    } from '@/TSFolder/minesweeper'

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
        if (cell.isRevealed && cell.isMine) {
            gameOver.value = true
            revealAllMines(grid.value, cell.row, cell.col)
        }
        else {
            return revealCell(grid.value, cell.row, cell.col)
        }
    }

    function revealAllMines(grid: Cell[][], row: number, col: number) {
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                const cell = grid[r][c]
                if (!cell.isMine) continue
                cell.isRevealed = true
            }
        }
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
