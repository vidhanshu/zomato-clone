export const stringShortener = (s: string, len: number) => {
  if (s.length > len) {
    return s.substring(0, len) + "...";
  }
  return s;
};
