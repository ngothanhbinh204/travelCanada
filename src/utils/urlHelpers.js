const paramKeyMap = {
  province: "locations",
  theme: "themes",
  season: "seasons",
};

export const slugify = (text) => {
  return text.toLowerCase().trim().replace(/\s+/g, "_");
};

export const buildFilterURL = (pathname, filters) => {
  const queryParts = [];

  Object.keys(filters).forEach((key) => {
    const paramKey = paramKeyMap[key] || key;
    const values = filters[key];

    if (Array.isArray(values) && values.length) {
      const paramValue = values.map(slugify).join("+"); // ✅ Dùng dấu "+" để nối các lựa chọn
      queryParts.push(`${paramKey}=${paramValue}`);
    }
  });

  const queryString = queryParts.length ? `?${queryParts.join("&")}` : "";
  return `${pathname}${queryString}`;
};
