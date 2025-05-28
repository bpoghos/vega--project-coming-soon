import { Timestamp } from "firebase/firestore";

export const formatFirestoreDate = (firestoreDate: any) => {
  const date = firestoreDate instanceof Timestamp ? firestoreDate.toDate() : new Date(firestoreDate);

  const timeZone = "Asia/Yerevan";

  return {
    month: date.toLocaleDateString("en-US", { month: "short", timeZone }), // 'Jan'
    day: date.toLocaleDateString("en-US", { day: "2-digit", timeZone }),   // '23'
    year: date.toLocaleDateString("en-US", { year: "numeric", timeZone })  // '2025'
  };
};




