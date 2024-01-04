import { get, split } from 'lodash';
import moment from 'moment';

export const calculateTimeAgo = (timestamp) => {
    const givenTimestamp = moment(new Date(timestamp));
    const currentTimestamp = moment();

    // Calculate different time units
    const seconds = currentTimestamp.diff(givenTimestamp, 'seconds');
    const minutes = currentTimestamp.diff(givenTimestamp, 'minutes');
    const hours = currentTimestamp.diff(givenTimestamp, 'hours');
    const days = currentTimestamp.diff(givenTimestamp, 'days');

    // Return appropriate time unit based on the greatest non-zero value
    if (days > 0) {
      return `${days} ${days > 1 ? 'days' : 'day'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
    } else {
      return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`;
    }
  };



  export const getFileName = (data) => {
    const splittedData = split(data, '/');
    const fileNameWithExtension = get(splittedData, '[1]', '');
    const fileName = split(fileNameWithExtension, '.')[0];
  
    return fileName;
  };
  


  export const removeBeforeAtSymbol = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email; // Return the original string if '@' is not found
  };