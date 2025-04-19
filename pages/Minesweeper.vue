<template>
    <div class="container mx-auto flex flex-col items-center p-5">
        <div class="p-4">
            <p class="text-3xl"><strong>Minesweeper</strong></p>
        </div>
        <div class="flex gap-5 p-2">
            <div>Select Difficulty</div>
            <div>
                <select v-model="Difficulties">
                    <option disabled :value=Difficulties>{{ Difficulties }}</option>
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
            </div>
            <div class="">
                <Buttons Prompt="Home" Directory="/"/>
            </div>
        </div>
        <div class="grid" :style="`grid-template-columns: repeat(${BoardSize['cols']}, 1fr);`">
            <button
                v-for="(cell, index) in board"
                :key="index"
                class="w-10 h-10 border border-gray-400 flex items-center justify-center text-sm font-bold"
                :class="{
                    'bg-gray-300': !cell.isRevelaed,
                    'bg-white': cell.isRevelaed,
                    'bg-red-500': cell.isRevelaed && cell.isMine
                }"
                @click="revealCell(index)"
            >
                <span></span>
            </button>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    const Difficulties = ref(1)

    const BoardSize = ref<any>({
        rows: 10,
        cols: 10,
        mines: 10
    })
    const board = ref<Cell[]>([])

    switch (Difficulties.value) {
        case 1:
            BoardSize.value['rows'] = 10
            BoardSize.value['cols'] = 10
            BoardSize.value['mines'] = 10
            break;
        
        case 2:
            BoardSize.value['rows'] = 15
            BoardSize.value['cols'] = 15
            BoardSize.value['mines'] = 15
            break;

        case 3:
            BoardSize.value['rows'] = 20
            BoardSize.value['cols'] = 20
            BoardSize.value['mines'] = 20
            break;
        
    }

    console.log(board.value)

    type Cell = {
        isMine: Boolean
        isRevelaed: Boolean
        adjacentMines: Number
    }

    function generateBoard() {
        const size = BoardSize.value['rows'] * BoardSize.value['cols']
        const cells: Cell[] = Array(size).fill(null).map(() => ({
            isMine: false,
            isRevelaed: false,
            adjacentMines: 0
        }))

        // Place mines randomly
        let mineCount = 0
        while(mineCount < BoardSize.value['mines']) {
            const i = Math.floor(Math.random() * size)
            if (!cells[i].isMine) {
                cells[i].isMine = true
                mineCount++
            }
        }

        // Count adjacent Mines
        const getIndex = (r: number, c: number) => r * BoardSize.value['cols'] + c
        for (let r = 0; r < BoardSize.value['rows']; r++) {
            for (let c = 0; c < BoardSize.value['cols']; c++) {
                const i = getIndex(r, c)
                if (cells[i].isMine) continue

                let count = 0
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue

                        const nr = r + dr
                        const nc = c + dc

                        if (
                            nr >= 0 &&
                            nc >= 0 &&
                            nr < BoardSize.value['rows'] &&
                            nc < BoardSize.value['cols'] &&
                            cells[getIndex(nr, nc)]?.isMine
                        ) {
                                count++
                            }
                    }
                }
                cells[i].adjacentMines = count
            }
        }
        board.value = cells
    }

    function revealCell(index: number) {
        if (board.value[index].isRevealed) return board.value[index].isRevealed = true
        // (Optional) Add recursive reveal for zero adjacent mines
    }

    onMounted(generateBoard)

</script>