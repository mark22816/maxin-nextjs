"use client";

import { useState } from "react";

// Today's date (local time) as YYYY-MM-DD, used as the max for a birthday input.
export const getToday = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

// Age in full years from a YYYY-MM-DD string. Returns "" if empty or invalid.
export const calcAge = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const now = new Date();
  let years = now.getFullYear() - y;
  const hadBirthday =
    now.getMonth() + 1 > m || (now.getMonth() + 1 === m && now.getDate() >= d);
  if (!hadBirthday) years--;
  return years >= 0 ? String(years) : "";
};

// Use in any form with a birthday + age field.
export default function useBirthdayAge() {
  const [age, setAge] = useState("");

  return {
    age,                                                  // value for the age input
    today: getToday(),                                    // max for the birthday input
    onBirthdayChange: (e) => setAge(calcAge(e.target.value)), // onChange for the birthday input
    resetAge: () => setAge(""),                           // call after the form resets
  };
}