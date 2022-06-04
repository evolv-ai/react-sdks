describe('on-dom-change', () => {
  it('should be called when dom changes', async () => {
    const { onDomChange } = require('./on-dom-change');
    const callback = jest.fn()
    onDomChange(callback)
    expect(callback).toHaveBeenCalledTimes(1)
    window.document.body.appendChild(document.createElement('div'))
    await new Promise((r) => setTimeout(r, 10))
    expect(callback).toHaveBeenCalledTimes(2)
  })
  it('should call when dom changes inside container', async () => {
    const { onDomChange } = require('./on-dom-change');
    const callback = jest.fn()
    const container = document.createElement('div')
    window.document.body.appendChild(container)
    onDomChange(callback, container)
    expect(callback).toHaveBeenCalledTimes(0)
    container.appendChild(document.createElement('div'))
    await new Promise((r) => setTimeout(r, 10))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})