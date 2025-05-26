export interface Cell {
  row: number
  col: number
  isMine: boolean
  isRevealed: boolean
  adjacentMines: number
}

export function createGrid(rows: number, cols: number): Cell[][] {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c): Cell => ({
      row: r,
      col: c,
      isMine: false,
      isRevealed: false,
      adjacentMines: 0
    }))
  )
}

export function placeMines(grid: Cell[][], totalMines: number) {
  const rows = grid.length
  const cols = grid[0].length
  let placed = 0

  while (placed < totalMines) {
    const r = Math.floor(Math.random() * rows)
    const c = Math.floor(Math.random() * cols)
    if (!grid[r][c].isMine) {
      grid[r][c].isMine = true
      placed++
    }
  }
}

export function calculateAdjacents(grid: Cell[][]) {
  const directions = [-1, 0, 1]

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const cell = grid[r][c]
      if (cell.isMine) continue

      directions.forEach(dr => {
        directions.forEach(dc => {
          if (dr === 0 && dc === 0) return
          const nr = r + dr
          const nc = c + dc
          if (
            nr >= 0 &&
            nr < grid.length &&
            nc >= 0 &&
            nc < grid[0].length &&
            grid[nr][nc].isMine
          ) {
            cell.adjacentMines++
          }
        })
      })
    }
  }
}

export function revealCell(grid: Cell[][], row: number, col: number) {
  const cell = grid[row][col]
  if (cell.isRevealed || cell.isMine) return
  cell.isRevealed = true

  if (cell.adjacentMines === 0) {
    const directions = [-1, 0, 1]
    directions.forEach(dr => {
      directions.forEach(dc => {
        if (dr === 0 && dc === 0) return
        const nr = row + dr
        const nc = col + dc
        if (
          nr >= 0 &&
          nr < grid.length &&
          nc >= 0 &&
          nc < grid[0].length
        ) {
          revealCell(grid, nr, nc)
        }
      })
    })
  }
}
