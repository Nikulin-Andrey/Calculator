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
  commandsCount,
  command,
  prevResult,
  beforeResult,
) =>
  commandsCount > 0 && beforeResult
    ? command.execute(prevResult, value)
    : value
