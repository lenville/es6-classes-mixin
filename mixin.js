export default function mix(...mixins) {
  class Mix {
    constructor(...args) {
      this.initialize && this.initialize(...args)

      for (let i in mixins) {
        const newMixin = new mixins[i](...args)

        copyProperties(this, newMixin)
        copyProperties(this.prototype, newMixin.prototype)
      }
    }
  }

  for (let i in mixins) {
    copyProperties(Mix, mixins[i])
  }

  return Mix
}

function copyProperties(target = {}, source = {}) {
  const ownPropertyNames = Object.getOwnPropertyNames(source)

  ownPropertyNames
    .filter(key => !/(prototype|name|constructor)/.test(key))
    .forEach(key => {
      const desc = Object.getOwnPropertyDescriptor(source, key)

      Object.defineProperty(target, key, desc)
    })
}
