/**
 * Formats a given date string to "DAY, MONTH, YEAR".
 * @param datetime - The datetime string in the format "2024-01-13T00:00:00.000Z".
 * @returns The formatted date string.
 */
export default function (datetime: string): string {
  const date = new Date(datetime)

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayOfWeek = daysOfWeek[date.getUTCDay()]
  const month = months[date.getUTCMonth()]
  const dayOfMonth = date.getUTCDate()
  const year = date.getUTCFullYear()

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`
}
