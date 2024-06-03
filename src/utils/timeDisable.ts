export const getDisabledHours = (start: number, end: number): number[] => {
  const allHours = Array.from({ length: 24 }, (_, index) => index + 1);
  const result = allHours.filter((hour) => hour < start || hour > end);
  return result;
};
