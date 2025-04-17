import { useState } from "react";

/**
 * A custom hook to progressively load items in chunks.
 * @param data The full array of data.
 * @param initialCount Number of items to show initially.
 * @param step Number of items to add on each load.
 */
export const useProgressiveLoad = <T>(data: T[], initialCount = 9, step = 3) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleItems = data.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + step, data.length));
  };

  const hasMore = visibleCount < data.length;

  return { visibleItems, showMore, hasMore };
};
