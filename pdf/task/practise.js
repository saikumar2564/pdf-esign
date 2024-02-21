;

// console.log(timezoneOffset); 
function getCurrentTimestampForTimeZone(timezoneOffset) {
    const utcTimestamp = Date.now(); // Get current UTC timestamp
    const localOffset = new Date().getTimezoneOffset() * 60000; // Get local timezone offset in milliseconds
    const targetOffset = timezoneOffset * 60 * 1000; // Convert target timezone offset to milliseconds
    const targetTimestamp = utcTimestamp + localOffset + targetOffset; // Calculate target timestamp
    return targetTimestamp;
  }
  
  // Example usage
//   const newYorkTimestamp = getCurrentTimestampForTimeZone(timezoneOffset); // New York timezone (UTC-5)
//   const londonTimestamp = getCurrentTimestampForTimeZone(7); // London timezone (UTC+0)
//   const tokyoTimestamp = getCurrentTimestampForTimeZone(9); // Tokyo timezone (UTC+9)
  
//   console.log(newYorkTimestamp);
//   console.log(londonTimestamp);
//   console.log(tokyoTimestamp);
module.exports=getCurrentTimestampForTimeZone