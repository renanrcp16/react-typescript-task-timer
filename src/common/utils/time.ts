export function timeToSecs(time: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hourToSecs = Number(hours) * 3600;
  const minToSecs = Number(minutes) * 60;
  return hourToSecs + minToSecs + Number(seconds);
}
