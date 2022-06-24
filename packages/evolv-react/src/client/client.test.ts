import { EvolvClient } from "./client"

describe("EvolvClient", () => {
  it("should start the client", () => {
    const client = new EvolvClient({
      environmentId: "1234",
      userId: "1234",
    })
    expect(client).toBeDefined()
    expect((client.client as any).initialized).toBe(true)
    expect((client.client as any).initializedUserId).toBe('1234')
  })

  it('should suscribe to key', () => {
    const key = 'variableKey';
    const client = new EvolvClient({
      environmentId: "1234",
      userId: "1234",
    });

    expect(client.client.get).toHaveBeenCalledTimes(0);
    const cb1 = jest.fn();
    client.subscribeToKey(key, cb1);
    expect(client.client.get).toHaveBeenCalledTimes(1);
    expect(client.subscribers[key]).toBeDefined();
    expect(cb1).toHaveBeenCalledTimes(0);
    (client.client as any).callListeners(key);
    expect(cb1).toHaveBeenCalledTimes(1);

    const cb2 = jest.fn();
    client.subscribeToKey(key, cb2);
    expect(cb2).toHaveBeenCalledTimes(0);
    (client.client as any).callListeners(key);
    // expect(cb2).toHaveBeenCalledTimes(1);

  })

  it('should emit', () => {
    const key = 'eventKey';
    const client = new EvolvClient({
      environmentId: "1234",
      userId: "1234",
    });
    expect(client.client.emit).toHaveBeenCalledTimes(0);
    client.emit(key);
    expect(client.client.emit).toHaveBeenCalledTimes(1);
    client.emit(key);
    expect(client.client.emit).toHaveBeenCalledTimes(2);
    expect(client.client.emit).toHaveBeenCalledWith(key);
  })
})