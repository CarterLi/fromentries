module.exports = fromEntries

function fromEntries (iterable) {
  return Object.assign({}, ...Array.from(iterable, ([key, val]) => ({ [key]: val })))
}
