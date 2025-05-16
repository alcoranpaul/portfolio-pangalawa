import master_list from "../../assets/experiences/master_list_experiences.json";

export class WorkData {
    title: string;
    company: string;
    years: string;
    markdown: string;
    description: string[];

    constructor(
        title: string,
        company: string,
        years: string,
        markdown: string,
        description: string[]
    ) {
        this.title = title;
        this.company = company;
        this.years = years;
        this.markdown = markdown;
        this.description = description;
    }
}

interface WorkJSON {
    title: string;
    company: string;
    years: string;
    markdown: string;
    description: string[];
}

const rawData = master_list as unknown as WorkJSON[];

export const workDataList: WorkData[] = rawData.map(
    (data) => new WorkData(data.title, data.company, data.years, data.markdown, data.description)
);
