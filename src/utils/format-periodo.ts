import { intervalToDuration } from "date-fns";

export const formatPeriodo = (value: number, type: "periodo" | "total") => {
  const duration = intervalToDuration({ start: 0, end: value * 1000 });

  const totalHours = (duration.days ?? 0) * 24 + (duration.hours ?? 0);
  const minutes = duration.minutes ?? 0;
  const seconds = duration.seconds ?? 0;

  const hoursStr = String(totalHours).padStart(2, "0");
  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  if (type === "periodo") {
    return value > 0 ? `${hoursStr}h${minutesStr}m${secondsStr}s` : "00h00m00s";
  }

  return value > 0
    ? `${hoursStr}h ${minutesStr}m ${secondsStr}s`
    : "00h 00m 00s";
};
