// Function to get current time in a specific time zone
function getCurrentTimeInTimeZone(timeZone) {
    // Get current time in UTC
    const now = new Date();

    // Adjust time to the desired time zone
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert to UTC
    const timeZoneOffset = timeZone * 60 * 60 * 1000; // Convert hours to milliseconds
    const timeInTimeZone = utcTime + timeZoneOffset;

    return timeInTimeZone;
}


// Example usage
const nowIndia = getCurrentTimeInTimeZone(5.5); // India is UTC+5.5
const nowUSA = getCurrentTimeInTimeZone(-5); // USA is typically UTC-5 (EST)
const nowEurope = getCurrentTimeInTimeZone(1); // Europe is typically UTC+1 (CET)

console.log("Current time in India (IST):", nowIndia);
console.log("Current time in USA (EST):", nowUSA);
console.log("Current time in Europe (CET):", nowEurope);
