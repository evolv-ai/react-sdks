import "jest-location-mock";

beforeEach(() => {
  const evolvMock: any = {}
  evolvMock.context = {}
  evolvMock.context.set = (key: string, value: string) => {
    evolvMock.context[key] = value
  }
  evolvMock.context.get = (key: string) => {
    return evolvMock.context[key]
  }
  (window as any).evolv = evolvMock
})

afterEach(() => {
  jest.resetModules();
  document.getElementsByTagName('html')[0].innerHTML = '';
})