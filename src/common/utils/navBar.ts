
export const composeTargets = (
  withCardClassNames: string[],
  action: (...args: any[]) => any
) => withCardClassNames.map(cn => ({
  action: () => action(cn),
  path: '/',
  text: cn,
}));
