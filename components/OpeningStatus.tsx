"use client";

import { useEffect, useState } from "react";
import { getCurrentStoreStatus, type Store } from "@/lib/stores";

export default function OpeningStatus({ store, compact = false }: { store: Store; compact?: boolean }) {
  const [status, setStatus] = useState(() => getCurrentStoreStatus(store));

  useEffect(() => {
    const update = () => setStatus(getCurrentStoreStatus(store));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [store]);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
        status.isOpen
          ? "bg-emerald-100 text-emerald-900"
          : "bg-crust-100 text-crust-800"
      } ${compact ? "" : "shadow-sm"}`}
      role="status"
    >
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${
          status.isOpen ? "bg-emerald-500" : "bg-crust-500"
        }`}
        aria-hidden="true"
      >
        {status.isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
      </span>
      {status.message}
    </span>
  );
}
