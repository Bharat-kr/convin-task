import { useEffect } from "react";

const useOutsideClickHandler = (ref, action) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        event.stopPropagation();
        action();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClickHandler;
