import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, timer: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, timer]);

  return debouncedValue;
}
