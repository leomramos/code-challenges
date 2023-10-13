export {}

const input = await Deno.readTextFile('./input.txt')
const lines = input.split('\n')

const elves: number[] = []

let curElf = 0
lines.forEach(line => {
  if (line === '') curElf++
  elves[curElf] = (elves[curElf] || 0) + Number(line)
})

elves.sort((a, b) => b - a)

console.log(elves[0])
