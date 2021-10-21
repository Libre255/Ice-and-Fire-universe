export const filterByHouseName = (houseName: string, searchInput: string) =>
  houseName.toLowerCase().startsWith(searchInput.toLowerCase());
