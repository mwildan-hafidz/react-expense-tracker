import { useEffect, useState } from "react";
import ListItem from "./ListItem.jsx";

export default function List({ expenses }) {
  const [page, setPage] = useState(0);

  const range = 5;
  const start = page * range;
  const end = start + range;

  const pageCount = Math.ceil(expenses.length / range);
  const isFirstPage = page <= 0;
  const isLastPage = page >= pageCount - 1;

  const items = expenses.slice(start, end);

  useEffect(() => {
    if (page > pageCount - 1 && pageCount > 0) setPage(pageCount - 1)
  }, [expenses.length, page, pageCount]);

  if (expenses.length === 0) return (
    <h1 className="p-3 border rounded border-neutral-300 text-center text-neutral-500">
      You don't have any expenses yet.
    </h1>
  );

  return (
    <>
      <ul className="border rounded border-neutral-300 divide-neutral-300 divide-y *:p-3 mb-2">
        {items.map((item) => <ListItem key={item.id} item={item} />)}
      </ul>
      <div className="flex items-start gap-2">
        <span className="px-1 text-sm text-neutral-500">Page: {page + 1}</span>
        <button
          className="ml-auto px-2 py-1 border border-neutral-300 rounded font-semibold text-neutral-600 
          disabled:bg-neutral-200 disabled:text-neutral-400 hover:bg-neutral-200"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={isFirstPage}
        >
          Previous
        </button>
        <button
          className="px-2 py-1 border border-neutral-300 rounded font-semibold text-neutral-600 
          disabled:bg-neutral-200 disabled:text-neutral-400 hover:bg-neutral-200"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLastPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
