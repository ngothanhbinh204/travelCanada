import { useEffect, useRef } from "react";
/**
 * Hook xử lý click bên ngoài 1 element
 * @param {RefObject} ref - element cần theo dõi
 * @param {Function} onClickOutside - callback khi click bên ngoài
 */

export default function useClickOutSide(callback = () => {}) {
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(ev) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target)) {
        callback();
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    nodeRef,
  };
}
