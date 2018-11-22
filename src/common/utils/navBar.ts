
export const composeTextTargets = (
  withValues: string[],
  action: (value: string) => any
) => withValues.map(value => ({
  action: () => action(value),
  path: '/',
  text: value,
}));
