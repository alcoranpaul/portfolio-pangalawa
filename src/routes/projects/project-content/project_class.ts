import master_list from "../../../json/projects/master_list_projects.json";
export class ProjectData {
    name: string;
    description: string;
    image: string;
    startDate: Date;
    endDate?: Date;

    constructor(name: string, description: string, startDate: Date, image: string, endDate?: Date) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.image = image;
        this.endDate = endDate;
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
    description: string;
    image: string;
    startDate: string;
    endDate?: string;
}

// Type assertion to tell TS this is an array of the right shape
const rawData = master_list as unknown as ProjectJSON[];

// Map raw JSON to actual class instances
export const projectDataList: ProjectData[] = rawData.map(
    (data) =>
        new ProjectData(
            data.name,
            data.description,
            new Date(data.startDate),
            data.image,
            data.endDate ? new Date(data.endDate) : undefined
        )
);
