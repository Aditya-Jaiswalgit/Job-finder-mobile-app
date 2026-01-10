export const checkImageURL = (url: string): boolean => {
  if (!url) return false;
  const pattern = new RegExp("^https?:\\/\\/.+", "i");
  return pattern.test(url);
};
