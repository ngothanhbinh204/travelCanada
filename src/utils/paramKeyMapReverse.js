export const paramKeyMapReverse = {
  locations: "province",
  themes: "theme",
  seasons: "season",
};

export const unslugify = (text) => {
  return text.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

// export const parseFiltersFromURL = (searchParams) => {
//   const params = new URLSearchParams(searchParams);
//   const filters = {};

//   for (const [key, value] of params.entries()) {
//     const filterKey = paramKeyMapReverse[key] || key;
//     const values = value.split("+").map((v) => v); // vẫn giữ dạng slug, sẽ map sau
//     filters[filterKey] = values;
//   }

//   return filters;
// };
export const parseFiltersFromURL = (search) => {
  const params = new URLSearchParams(search);
  const result = {};

  for (const [key, value] of params.entries()) {
    // Split by dấu cách
    result[key] = value.split(" ").filter(Boolean);
  }

  return result;
};
