import { Heading } from "../components/table_of_content/table_of_content.component";

export function extractHeadings(markdown: string): {
    headings: Heading[];
    idMap: Record<string, string>;
} {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const headings: Heading[] = [];
    const idMap: Record<string, string> = {};
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const rawText = match[2]
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/\*(.*?)\*/g, "$1")
            .replace(/__(.*?)__/g, "$1")
            .replace(/_(.*?)_/g, "$1")
            .trim();
        const id = rawText
            .toLowerCase()
            .replace(/[^\w]+/g, "-")
            .replace(/(^-|-$)/g, "");

        headings.push({ level, text: rawText, id });
        idMap[rawText] = id;
    }

    return { headings, idMap };
}
