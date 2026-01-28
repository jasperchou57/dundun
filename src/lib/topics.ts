export type Topic = {
  key: string;
  title: string;
  description: string;
  pages: Array<{ slug: string; title: string; description: string }>;
};

// Programmatic SEO: topic clusters → pages.
export const topics: Topic[] = [
  {
    key: "text-case",
    title: "Text Case",
    description:
      "Guides and pages around converting text case (uppercase, lowercase, title case, sentence case).",
    pages: [
      {
        slug: "convert-text-case",
        title: "Convert Text Case",
        description:
          "Convert text case online. Includes UPPERCASE, lowercase, Title Case, and Sentence case.",
      },
      {
        slug: "title-case-converter",
        title: "Title Case Converter",
        description: "How to convert text to Title Case (with examples).",
      },
      {
        slug: "sentence-case",
        title: "Sentence Case",
        description: "How to convert text to Sentence case (with tips).",
      },
    ],
  },
];

export function getTopic(key: string) {
  return topics.find((t) => t.key === key);
}

export function getTopicPage(topicKey: string, slug: string) {
  const t = getTopic(topicKey);
  if (!t) return undefined;
  return t.pages.find((p) => p.slug === slug);
}
