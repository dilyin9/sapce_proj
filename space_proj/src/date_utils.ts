import { DateTime } from 'luxon'

export function getDateLocalFormatString(dt: string | undefined, format='dd.MM.yyyy HH:mm:ss'): string {
  if (!dt) {
      return ""
  }
  if (dt.startsWith("0001-01-01")) {
      return ""
  }
  const d = DateTime.fromISO(dt)
  const res = d.toLocal().toFormat(format)
  return res
}