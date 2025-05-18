import { ReactElement } from "react";
import { Container } from "./table_of_content.styles";

export type Heading = {
    level: number;
    text: string;
    id: string;
};

export default function TableOfContent({ headings }: { headings: Heading[] }): ReactElement {
    return (
        <Container>
            {" "}
            <ul>
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`heading_${heading.level}`}
                        style={{ marginLeft: (heading.level - 1) * 10 }}
                    >
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById(heading.id);
                                if (el) {
                                    el.classList.add("highlight");
                                    el.scrollIntoView({ behavior: "smooth", block: "start" });

                                    setTimeout(() => {
                                        el.classList.remove("highlight");
                                    }, 1000); // 1 seconds
                                }
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
