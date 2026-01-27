export type ToolKey = "text-case-converter";

export type ToolDef = {
  key: ToolKey;
  title: string;
  description: string;
  keywords: string[];
};

export const tools: ToolDef[] = [
  {
    key: "text-case-converter",
    title: "Text Case Converter",
    description:
      "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more — fast, free, and privacy-friendly.",
    keywords: [
      "text case converter",
      "uppercase",
      "lowercase",
      "title case",
      "sentence case",
      "online",
      "free",
    ],
  },
];

export function getTool(key: string) {
  return tools.find((t) => t.key === key);
}
