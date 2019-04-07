import moment from 'moment'

/**
 * @param {date} - date time format
 * @return {String} return new date time diff to string
 *
 * Example:
 * --- 1 minutes ago ---
 */
export const getDateDiff = (date = Date.now(), dateNow = Date.now()) => {
  const measurements = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']

  for (let i of measurements) {
    if (moment(dateNow).diff(date, i) <= 0) {
      continue
    }

    return `${moment(dateNow).diff(date, i)} ${i} ago`
  }

  return 'Now'
}
