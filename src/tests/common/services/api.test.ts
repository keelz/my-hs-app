import localApi from '../../../common/services/localApi';

describe('api service', () => {
  it('composes a path with parameters correctly', () => {
    const path = '/{testOne}/{testTwo}';
    const pathCheck = '/valueOne/valueTwo';
    const test = localApi.pathWithParameters(path, { testOne: 'valueOne', testTwo: 'valueTwo' });
    expect(test).toBe(pathCheck);
  });

  it('composes a create promise correctly', () => {
    const p = localApi.create('/test/path', {});
    expect(p instanceof Promise).toBe(true);
  });

  it('composes a read promise correctly', () => {
    const p = localApi.read('/test/path');
    expect(p instanceof Promise).toBe(true);
  });

  it('composes an update promise correctly', () => {
    const p = localApi.update('/test/path', {});
    expect(p instanceof Promise).toBe(true);
  });

  it('composes a delete promise correctly', () => {
    const p = localApi.delete('/test/path');
    expect(p instanceof Promise).toBe(true);
  });
});
