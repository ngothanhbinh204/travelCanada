export function generateSliderId(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "_"); // thay khoảng trắng bằng _
}
