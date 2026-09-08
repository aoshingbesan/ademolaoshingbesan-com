"use client";

import { useEffect, useState } from "react";

type Service = { title: string; description: string };

export function ServicesCarousel({
  services,
  interval = 4000,
}: {
  services: Service[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (services.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % services.length),
      interval,
    );
    return () => clearInterval(id);
  }, [services.length, interval]);

  return (
    <div className="mt-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {services.map((service, i) => (
            <div key={i} className="w-full shrink-0 pr-1">
              <p className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-1.5">
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show service ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-zinc-900 dark:bg-zinc-100"
                : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
