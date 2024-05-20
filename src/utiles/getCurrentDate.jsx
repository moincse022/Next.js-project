 
export function showCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-indexed in JavaScript
    const year = today.getFullYear();
  
    // Add leading zeros to day and month if needed
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    const currentDate = `${formattedDay}/${formattedMonth}/${year}`;
    console.log(`Current Date: ${currentDate}`);
    return currentDate;
  }
  
  // Call the function to display the current date
  showCurrentDate();
  