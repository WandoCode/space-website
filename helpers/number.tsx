export const formatIntToDoubleString = (num: number) => {
  const numStr = num.toString()

  return numStr.length >= 2 ? numStr : `0${numStr}`
}
