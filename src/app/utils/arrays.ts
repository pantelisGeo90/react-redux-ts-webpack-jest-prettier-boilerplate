function isNullOrEmpty<T>(array: T[] = []): boolean {
  return array.length != null && array.length === 0;
}

function hasMoreThanOne<T>(array: T[] = []): boolean {
  return !isNullOrEmpty(array) && array.length > 1;
}

export { isNullOrEmpty, hasMoreThanOne };
