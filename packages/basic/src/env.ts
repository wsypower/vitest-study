export function doubleUserAge() {
  // eslint-disable-next-line n/prefer-global/process
  const count = process.env.USER_AGE as unknown as number
  return count * 2
}
