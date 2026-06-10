"use client";

import { useState } from "react";

const demos = {
  search: {
    question: "Where is authentication implemented?",
    results: [
      "auth.py",
      "middleware.ts",
      "jwt_service.py",
    ],
  },

  architecture: {
    question: "Generate system architecture",
    results: [
      "Frontend → FastAPI",
      "FastAPI → Qdrant",
      "Qdrant → LLM",
    ],
  },

  dependency: {
    question: "Analyze repository dependencies",
    results: [
      "React → API Client",
      "API → Services",
      "Services → Database",
    ],
  },

  review: {
    question: "Review payment module",
    results: [
      "Potential null reference",
      "Missing rate limiting",
      "Security recommendation",
    ],
  },
};

export default function RepoMindDemo() {
  const [active, setActive] =
    useState<keyof typeof demos>("search");

  return (
    <div className="mt-12">

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => setActive("search")}
          className="px-4 py-2 rounded-full border border-zinc-700"
        >
          Search
        </button>

        <button
          onClick={() => setActive("architecture")}
          className="px-4 py-2 rounded-full border border-zinc-700"
        >
          Architecture
        </button>

        <button
          onClick={() => setActive("dependency")}
          className="px-4 py-2 rounded-full border border-zinc-700"
        >
          Dependencies
        </button>

        <button
          onClick={() => setActive("review")}
          className="px-4 py-2 rounded-full border border-zinc-700"
        >
          Review
        </button>

      </div>

      <div className="mt-8 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="border-b border-zinc-800 px-6 py-4 flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />

        </div>

        <div className="p-8">

          <p className="text-zinc-500">
            Ask RepoMind
          </p>

          <h3 className="text-2xl font-semibold mt-4">
            {demos[active].question}
          </h3>

          <div className="mt-8 space-y-4">

            {demos[active].results.map((item) => (
              <div
                key={item}
                className="
                  border border-zinc-800
                  rounded-xl
                  px-5
                  py-4
                  hover:border-zinc-600
                  transition-all
                "
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}