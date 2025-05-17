import master_list from "../../../json/projects/master_list_projects.json";
export class ProjectData {
    name: string;
    image: string;
    description: string;
    short_description: string;
    markdown: string;
    tech_stack: string;
    startDate: Date;
    source_link: string;
    live_link: string;
    endDate?: Date;

    constructor(
        name: string,
        image: string,
        description: string,
        short_description: string,
        markdown: string,
        tech_stack: string,
        startDate: Date,
        source_link: string,
        live_link: string,
        endDate?: Date
    ) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.short_description = short_description;
        this.markdown = markdown;
        this.tech_stack = tech_stack;
        this.startDate = startDate;
        this.endDate = endDate;
        this.source_link = source_link;
        this.live_link = live_link;
    }

    isImageALink(): boolean {
        return (
            this.image.startsWith("http://") ||
            this.image.startsWith("https://") ||
            this.image.startsWith("/")
        );
    }

    toString(): string {
        return `ProjectData { name: "${this.name}", description: "${
            this.description
        }", startDate: ${this.startDate.toISOString()}, image: "${this.image}", endDate: ${
            this.endDate ? this.endDate.toISOString() : "undefined"
        } }`;
    }
}

// Ensure TypeScript knows the shape of each object in the JSON
interface ProjectJSON {
    name: string;
    image: string;
    description: string;
    short_description: string;
    markdown: string;
    tech_stack: string;
    startDate: Date;
    source_link: string;
    live_link: string;
    endDate?: Date;
}

// Type assertion to tell TS this is an array of the right shape
const rawData = master_list as unknown as ProjectJSON[];

// Map raw JSON to actual class instances
export const projectDataList: ProjectData[] = rawData.map(
    (data) =>
        new ProjectData(
            data.name,
            data.image,
            data.description,
            data.short_description,
            data.markdown,
            data.tech_stack,
            new Date(data.startDate),
            data.source_link,
            data.live_link,
            data.endDate ? new Date(data.endDate) : undefined
        )
);

export function getProjectData(name: string | undefined): ProjectData | undefined {
    if (name === undefined) return undefined;
    return projectDataList.find((item) => item.name === name);
}
