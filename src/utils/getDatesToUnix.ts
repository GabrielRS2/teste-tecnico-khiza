export function getDatesToUnix (date: string): number[] {
  const dateArray = date.split("/").reverse().join(".")
  const day1 = parseInt((new Date(dateArray).getTime() / 1000).toFixed(0))
  const day2 = day1 + 86399*2
  return [day1, day2]
}