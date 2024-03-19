import { parseDate as chronoParseDate } from 'chrono-node';
import { isSameMonth, format } from 'date-fns';
import { DATE_FORMAT } from './constants';

/**
 * Combines class names and conditional class names into a single string.
 *
 * @param {...(string|Object.<string, boolean>)} classes - A list of class names and/or objects.
 * Each object's key represents a class name and its value is a boolean indicating whether the class should be included.
 *
 * @returns {string} A string containing all class names that are either directly passed as a string or
 * whose corresponding condition in the object is true.
 *
 * @example
 * // Returns 'class1 class3'
 * cx('class1', { 'class2': false, 'class3': true });
 */
export const cx = (...classes: (string | { [key: string]: boolean })[]) => {
  return classes
    .flatMap((c) => {
      if (typeof c === 'string') {
        return c;
      } else {
        return (
          Object.entries(c)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, condition]) => condition)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([className, _]) => className)
        );
      }
    })
    .filter(Boolean)
    .join(' ');
};

/**
 * Parses a date string into a Date object. Handles special case where 'present' is treated as the current date.
 *
 * @param {string} dateString - The date string to parse.
 * @returns {Date} The parsed Date object.
 * @throws {Error} If the date string is invalid or unparseable.
 * @example
 * // Returns a Date object for January 1, 2018
 * parseDate('January 2018');
 */
export function parseDate(dateString: string): Date {
  if (dateString.toLowerCase() === 'present') {
    return new Date();
  } else {
    const parsedDate = chronoParseDate(dateString);
    if (parsedDate) {
      return parsedDate;
    } else {
      throw new Error('Invalid date format or unparseable date string');
    }
  }
}

/**
 * Formats a Date or date string into a readable string format. If the date is in the same month as the current date, returns 'Present'.
 *
 * @param {Date|string} date - The Date instance or date string to format.
 * @returns {string} The formatted date string.
 * @example
 * // Returns 'January 2018' or 'Present' if the date is in the current month
 * formatDate(new Date('2018-01-01'));
 */
export function formatDate(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseDate(date) : date;
  return isSameMonth(new Date(), parsedDate)
    ? 'Present'
    : format(parsedDate, DATE_FORMAT);
}

/**
 * Formats a date range into a readable string. If start and end dates are the same, or if there is no end date, only the start date is returned.
 *
 * @param {string|Date} start - The start date of the range.
 * @param {string|Date} [end] - The end date of the range, optional.
 * @returns {string} The formatted date range.
 * @example
 * // Returns 'January 2018 - March 2018' or just 'January 2018' if start and end are the same
 * formatDates('2018-01-01', '2018-03-01');
 */
export function formatDates(start: string | Date, end?: string | Date): string {
  const formattedStart = formatDate(start);
  if (!end || start === end) {
    return formattedStart;
  }

  const formattedEnd = formatDate(end);
  return `${formattedStart} - ${formattedEnd}`;
}

/**
 * Removes 'https://' and 'www.' from a URL string.
 *
 * @param {string} url - The URL to clean.
 * @returns {string} The cleaned URL.
 * @example
 * // Returns 'github.com/johndoe'
 * cleanUrl('https://www.github.com/johndoe');
 */
export function cleanUrl(url: string): string {
  return url.replace(/^https:\/\//, '').replace(/www\./, '');
}

/**
 * Extracts the GitHub username from a GitHub URL.
 *
 * @param {string} url - The GitHub URL to extract the username from.
 * @returns {string} The extracted GitHub username, or an empty string if not found.
 * @example
 * // Returns 'johndoe'
 * extractGithubUsername('https://github.com/johndoe');
 */
export function extractGithubUsername(url: string): string {
  const regex = /github\.com\/([^\/]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

/**
 * Ensures a URL starts with 'http://' or 'https://', prepending 'https://' if necessary.
 *
 * @param {string} url - The URL to check and modify if needed.
 * @returns {string} The absolute URL.
 * @example
 * // Returns 'https://github.com/johndoe'
 * ensureAbsoluteUrl('github.com/johndoe');
 */
export function ensureAbsoluteUrl(url: string): string {
  if (!url.match(/^http:\/\/|https:\/\//)) {
    return 'https://' + url;
  }
  return url;
}
