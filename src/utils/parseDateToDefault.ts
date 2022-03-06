export const parseDateToDefault = (date: Date) => {
  return date.toISOString().split(".")[0].replace("T", " ");
};
