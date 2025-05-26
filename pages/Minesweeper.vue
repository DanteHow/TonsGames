<template>
    <div class="container">
        <div>
            <div>Select Difficulties: </div>
            <!-- <UselectMenu v-model="value" :items="items" class="w-48"/> -->
        </div>
        <div class="grid gap-1" :style="{ gridTemplateColumns: `repeat(${cols}, 2rem)` }">
                <button
                    v-for="cell in flatGrid"
                    :key="`${cell.row}-${cell.col}`"
                    class="w-8 h-8 text-sm border rounded flex items-center justify-center"
                    :class="{
                        'bg-gray-200': cell.isRevealed,
                        'bg-white': !cell.isRevealed,
                        'text-red-600': cell.isMine && cell.isRevealed
                    }"
                    @click="handleClick(cell)"
                >
                    <span v-if="cell.isRevealed">
                        {{ cell.isMine ? '💣' : cell.adjacentMines || '' }}
                    </span>
                </button>
        </div>
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

onMounted(() => {
  grid.value = createGrid(rows, cols)
  placeMines(grid.value, mines)
  calculateAdjacents(grid.value)
})

const flatGrid = computed(() => grid.value.flat())

function handleClick(cell: Cell) {
  if (cell.isRevealed) return
  revealCell(grid.value, cell.row, cell.col)
}
</script>

<style scoped>
.grid {
  display: grid;
}
</style>
