type Predicate<T> = (item: T) => boolean

export function keep<T>(collection: T[], predicate: Predicate<T>): T[] {
  const result: T[] = []

  collection.forEach((item) => predicate(item) && result.push(item))

  return result
}

export function discard<T>(collection: T[], predicate: Predicate<T>): T[] {
    return keep(collection, (item) => !predicate(item))
}
