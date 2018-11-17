import api, { pathWithParameters } from '../../../common/services/api';

describe('api service', () => {
  it('composes a path with parameters correctly', () => {
    const path = '/:testOne/:testTwo';
    const pathCheck = '/valueOne/valueTwo';
    const test = pathWithParameters(path, { testOne: 'valueOne', testTwo: 'valueTwo' });
    expect(test).toBe(pathCheck);
  });

  it('composes a create promise correctly', () => {
    const p = api.create('/test/path', {});
    expect(p instanceof Promise).toBe(true);
  });

  it('composes a read promise correctly', () => {
    const p = api.read('/test/path');
    expect(p instanceof Promise).toBe(true);
  });

  it('composes an update promise correctly', () => {
    const p = api.update('/test/path', {});
    expect(p instanceof Promise).toBe(true);
  });

  it('composes a delete promise correctly', () => {
    const p = api.delete('/test/path');
    expect(p instanceof Promise).toBe(true);
  });
});
