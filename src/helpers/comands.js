const add = (x, y) => Number((x + y).toFixed(3))
const sub = (x, y) => Number((x - y).toFixed(3))
const mul = (x, y) => Number((x * y).toFixed(3))
const div = (x, y) => Number((x / y).toFixed(3))

function Command(execute, undo, value, type) {
  this.execute = execute
  this.undo = undo
  this.value = value
  this.type = type
}

const AddCommand = (value, type) =>
  new Command(add, sub, value, type)
const SubCommand = (value, type) =>
  new Command(sub, add, value, type)
const MulCommand = (value, type) =>
  new Command(mul, div, value, type)
const DivCommand = (value, type) =>
  new Command(div, mul, value, type)

export const getCommand = operationType => {
  switch (operationType) {
    case '+':
      return AddCommand
    case '-':
      return SubCommand
    case '*':
      return MulCommand
    case '\\':
      return DivCommand
  }
}

export const executeCommand = (
  value,
  {
    commands,
    result,
    beforeResult,
    changeOperand,
    exprations,
  },
) => {
  let x = result
  const y = value
  console.log(x, y)
  let curresntCommands = [...commands]
  if (exprations.length > 0) {
    x = exprations[exprations.length - 1].result
    curresntCommands =
      exprations[exprations.length - 1].commands
  }

  return curresntCommands.length > 0 &&
    beforeResult &&
    !changeOperand
    ? curresntCommands[curresntCommands.length - 1].execute(
        x,
        y,
      )
    : value
}

export const getCommands = (
  value,
  type,
  command,
  { changeOperand, commands },
) => {
  const commandsCount = commands.length

  return changeOperand && commandsCount > 0
    ? commands.map((current, index) =>
        index === commandsCount - 1
          ? new command(value, type)
          : current,
      )
    : [...commands, new command(value, type)]
}
