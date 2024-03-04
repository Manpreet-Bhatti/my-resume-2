export default function useDateFormat(start: string, end: string): string {
  try {
    // Split the start and end dates into their components
    const startParts = start.split(" ");
    const endParts = end.split(" ");

    if (startParts.length < 3 || endParts.length < 3) {
      throw new Error("Invalid date format");
    }

    const formattedStart = `${startParts[0]} ${startParts[2]}`;
    const formattedEnd =
      start === end ? "Present" : `${endParts[0]} ${endParts[2]}`;

    return `${formattedStart} \u2013 ${formattedEnd}`;
  } catch (error) {
    console.error("Error formatting date range:", error);
    return "Invalid date range";
  }
}
