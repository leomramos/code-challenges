export {}

const input = await Deno.readTextFile('./input.txt')
const lines = input.split('\n')

const points = {
  X: 0,
  Y: 3,
  Z: 6,
}

const pointsChoice = {
  R: 1,
  P: 2,
  S: 3,
}

const rules = {
  A: {
    X: 'S',
    Y: 'R',
    Z: 'P',
  },
  B: {
    X: 'R',
    Y: 'P',
    Z: 'S',
  },
  C: {
    X: 'P',
    Y: 'S',
    Z: 'R',
  },
}

const total = lines.reduce((acc, line) => {
  if (line) {
    const played = line.split(' ')
    const choice = rules[played[0]][played[1]]
    const score = pointsChoice[choice]
    const result = points[played[1]]
    acc += score + result
  }
  return acc
}, 0)

console.log(total)
