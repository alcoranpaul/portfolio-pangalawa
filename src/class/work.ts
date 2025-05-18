import master_list from "../json/experiences/master_list_experiences.json";

export class WorkData {
    title: string;
    full_title: string;
    tech_stack: string;
    company: string;
    years: string;
    markdown: string;
    description: string[];

    constructor(
        title: string,
        full_title: string,
        tech_stack: string,
        company: string,
        years: string,
        markdown: string,
        description: string[]
    ) {
        this.title = title;
        this.full_title = full_title;
        this.tech_stack = tech_stack;
        this.company = company;
        this.years = years;
        this.markdown = markdown;
        this.description = description;
    }

    GetFullTitle(): string {
        return this.full_title !== null ? this.full_title : this.title;
    }
}

interface WorkJSON {
    title: string;
    full_title: string;
    tech_stack: string;
    company: string;
    years: string;
    markdown: string;
    description: string[];
}

const rawData = master_list as unknown as WorkJSON[];

export const workDataList: WorkData[] = rawData.map(
    (data) =>
        new WorkData(
            data.title,
            data.full_title,
            data.tech_stack,
            data.company,
            data.years,
            data.markdown,
            data.description
        )
);

export function getWorkData(title: string | undefined): WorkData | undefined {
    if (title === undefined) return undefined;
    return workDataList.find((item) => item.title === title);
}
