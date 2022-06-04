import { EvolvFlow } from "./evolv-flow";

describe('evolv-flow', () => {
  it('should add a callback for dom changes', async () => {
    const flow = new EvolvFlow()
    const callback = jest.fn()
    flow.subscribe(callback)
    expect(callback).toHaveBeenCalledTimes(1)
    window.document.body.appendChild(document.createElement('div'))
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(2)
    flow.unsubscribe(callback);
    window.document.body.appendChild(document.createElement('div'))
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(2)
  })
  it('should generate uuid', () => {
    const flow = new EvolvFlow()
    const uuid = flow.getUuid()
    expect(typeof uuid).toBe('string')
    expect(uuid).toBeDefined()
  })
})