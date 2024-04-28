import { expect, describe, it } from 'vitest'
import { startGame, revealCell } from '@/redux/slice/minesweeper/core/game'
import { getRandomCoordinate } from './utils'


describe('start game [beginner]', () => {
  // 创建 level 为 beginner 的棋盘
  const beginner = {
    width: 9,
    height: 9,
    numMines: 10
  }
  const randSeed =  Math.random()
  const game = startGame(randSeed, beginner)
  
  it('创建棋盘是否异常', () => {
    const containsNegativeMineCount = game.grid.every(row => {
      return row.every(cell => cell.mineCount === 0);
    });
    expect(containsNegativeMineCount).toBeTruthy()
  })

  // 模拟随机点击
  const firstCoordinate = getRandomCoordinate(beginner.width, beginner.height)
  const firstClick = revealCell(game, firstCoordinate)
  
  it("创建地雷数量是否异常", () => {
    const countNegativeMineCounts = firstClick.grid.reduce((acc, row) => {
      return acc + row.reduce((innerAcc, cell) => {
        return innerAcc + (cell.mineCount === -1 ? 1 : 0);
      }, 0);
    }, 0);
    expect(countNegativeMineCounts).toBe(beginner.numMines)
  })

  it("首次点击的格子是否是地雷", () => {
    if (game.status !== 'ready') {
      expect(game.status).toBe('ready')
      return 
    }
    const { x, y } = firstCoordinate
    // mineCount 为 -1 时表示有雷
    expect(firstClick['grid'][y][x]['mineCount']).toBeGreaterThanOrEqual(0)
  })
})

describe('start game [intermediate]', () => {
  // 创建 level 为 intermediate 的棋盘
  const intermediate = {
    width: 16,
    height: 16,
    numMines: 40
  }
  const randSeed =  Math.random()
  const game = startGame(randSeed, intermediate)
  
  it('创建棋盘是否异常', () => {
    const containsNegativeMineCount = game.grid.every(row => {
      return row.every(cell => cell.mineCount === 0);
    });
    expect(containsNegativeMineCount).toBeTruthy()
  })

  // 模拟随机点击
  const firstCoordinate = getRandomCoordinate(intermediate.width, intermediate.height)
  const firstClick = revealCell(game, firstCoordinate)
  
  it("创建地雷数量是否异常", () => {
    const countNegativeMineCounts = firstClick.grid.reduce((acc, row) => {
      return acc + row.reduce((innerAcc, cell) => {
        return innerAcc + (cell.mineCount === -1 ? 1 : 0);
      }, 0);
    }, 0);
    expect(countNegativeMineCounts).toBe(intermediate.numMines)
  })

  it("首次点击的格子是否是地雷", () => {
    if (game.status !== 'ready') {
      expect(game.status).toBe('ready')
      return 
    }
    const { x, y } = firstCoordinate
    // mineCount 为 -1 时表示有雷
    expect(firstClick['grid'][y][x]['mineCount']).toBeGreaterThanOrEqual(0)
  })
})

describe('start game [expert]', () => {
  // 创建 level 为 expert 的棋盘
  const expert = {
    width: 30,
    height: 16,
    numMines: 99
  }
  const randSeed =  Math.random()
  const game = startGame(randSeed, expert)
  
  it('创建棋盘是否异常', () => {
    const containsNegativeMineCount = game.grid.every(row => {
      return row.every(cell => cell.mineCount === 0);
    });
    expect(containsNegativeMineCount).toBeTruthy()
  })

  // 模拟随机点击
  const firstCoordinate = getRandomCoordinate(expert.width, expert.height)
  const firstClick = revealCell(game, firstCoordinate)
  
  it("创建地雷数量是否异常", () => {
    const countNegativeMineCounts = firstClick.grid.reduce((acc, row) => {
      return acc + row.reduce((innerAcc, cell) => {
        return innerAcc + (cell.mineCount === -1 ? 1 : 0);
      }, 0);
    }, 0);
    expect(countNegativeMineCounts).toBe(expert.numMines)
  })

  it("首次点击的格子是否是地雷", () => {
    if (game.status !== 'ready') {
      expect(game.status).toBe('ready')
      return 
    }
    const { x, y } = firstCoordinate
    // mineCount 为 -1 时表示有雷
    expect(firstClick['grid'][y][x]['mineCount']).toBeGreaterThanOrEqual(0)
  })
})

describe('start game [custom]', () => {
  // 创建 level 为 custom 的棋盘
  const custom = {
    width: 16,
    height: 30,
    numMines: 99
  }
  const randSeed =  Math.random()
  const game = startGame(randSeed, custom)
  
  it('创建棋盘是否异常', () => {
    const containsNegativeMineCount = game.grid.every(row => {
      return row.every(cell => cell.mineCount === 0);
    });
    expect(containsNegativeMineCount).toBeTruthy()
  })

  // 模拟随机点击
  const firstCoordinate = getRandomCoordinate(custom.width, custom.height)
  const firstClick = revealCell(game, firstCoordinate)
  
  it("创建地雷数量是否异常", () => {
    const countNegativeMineCounts = firstClick.grid.reduce((acc, row) => {
      return acc + row.reduce((innerAcc, cell) => {
        return innerAcc + (cell.mineCount === -1 ? 1 : 0);
      }, 0);
    }, 0);
    expect(countNegativeMineCounts).toBe(custom.numMines)
  })

  it("首次点击的格子是否是地雷", () => {
    if (game.status !== 'ready') {
      expect(game.status).toBe('ready')
      return 
    }
    const { x, y } = firstCoordinate
    // mineCount 为 -1 时表示有雷
    console.log("firstClick['grid'][y][x]", firstClick['grid'][y][x])
    expect(firstClick['grid'][y][x]['mineCount']).toBeGreaterThanOrEqual(0)
  })
})

