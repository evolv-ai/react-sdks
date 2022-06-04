const createDiv = (className: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

describe('wait-query-all', () => {
  it('should wait for an elements to appear', async () => {
    const { waitQueryAll } = require('./wait-query-all');
    const callback = jest.fn();
    waitQueryAll('.test', callback);
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(0);
    document.body.insertAdjacentElement('beforeend', createDiv('test'));
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(1);
    document.body.insertAdjacentElement('beforeend', createDiv('test'));
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(2);
  })
  it('should return only new element', async () => {
    const { waitQueryAll } = require('./wait-query-all');
    const callback = jest.fn();
    waitQueryAll('.test-2', callback);
    expect(callback).toHaveBeenCalledTimes(0);
    const firstDiv = createDiv('test-2');
    document.body.insertAdjacentElement('beforeend', firstDiv);
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(1);
    const secondDiv = createDiv('test-2');
    document.body.insertAdjacentElement('beforeend', secondDiv);
    await new Promise((r) => setTimeout(r, 10));
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith([secondDiv], [firstDiv, secondDiv]);
  })
})