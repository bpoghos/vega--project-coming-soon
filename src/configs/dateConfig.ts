export const formatDate = (date: any): string => {
    if (!date) return "N/A";
  
    try {
      let parsedDate: Date;
  
      // Handle Firebase Timestamp object
      if (date.seconds !== undefined && date.nanoseconds !== undefined) {
        parsedDate = new Date(date.seconds * 1000);
      } 
      // Handle milliseconds (UNIX timestamp)
      else if (typeof date === "number") {
        parsedDate = new Date(date);
      } 
      // Handle stringified dates
      else if (typeof date === "string") {
        parsedDate = new Date(date);
      } 
      // Fallback if it's already a Date object
      else if (date instanceof Date) {
        parsedDate = date;
      } 
      else {
        throw new Error("Unrecognized date format");
      }
  
      return parsedDate.toLocaleDateString(); // Format as you like
    } catch (error) {
      console.error("Invalid date format:", error);
      return "Invalid Date";
    }
  };