"use client";

import { useMemo, useState } from "react";

function toTitleCase(input: string) {
  return input
    .toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase());
}

function toSentenceCase(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return "";
  const lower = trimmed.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  const outputs = useMemo(() => {
    return {
      uppercase: text.toUpperCase(),
      lowercase: text.toLowerCase(),
      titleCase: toTitleCase(text),
      sentenceCase: toSentenceCase(text),
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 p-6">
        <label className="text-sm font-medium">Input</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste text here…"
          className="mt-3 h-40 w-full resize-y rounded-xl border border-zinc-200 p-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setText("")}
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(text)}
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
          >
            Copy input
          </button>
        </div>
      </section>

      <section className="grid gap-4">
        {(
          [
            ["UPPERCASE", outputs.uppercase],
            ["lowercase", outputs.lowercase],
            ["Title Case", outputs.titleCase],
            ["Sentence case", outputs.sentenceCase],
          ] as const
        ).map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-zinc-200 p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-medium">{label}</div>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(value)}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
              >
                Copy
              </button>
            </div>
            <pre className="mt-3 whitespace-pre-wrap break-words rounded-xl bg-zinc-50 p-3 text-sm text-zinc-700">
              {value || "—"}
            </pre>
          </div>
        ))}
      </section>
    </div>
  );
}
