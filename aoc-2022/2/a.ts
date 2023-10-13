export {}

const input = await Deno.readTextFile('./input.txt')
const lines = input.split('\n')

const points = {
  X: 1,
  Y: 2,
  Z: 3,
}

const rules = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
}

const total = lines.reduce((acc, line) => {
  if (line) {
    const played = line.split(' ')
    const score = points[played[1]]
    const result = rules[played[0]][played[1]]
    acc += score + result
  }
  return acc
}, 0)

console.log(total)
