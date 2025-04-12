
export class ProjectData {
    id: number;
    name: string;
    description: string;
    image: string;
    startDate: Date;
    endDate?: Date;

    constructor(id: number, name: string, description: string, startDate: Date, image: string, endDate?: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.image = image;
        this.endDate = endDate;
        
    }

    isImageALink(): boolean {
        return this.image.startsWith("http://") || this.image.startsWith("https://") || this.image.startsWith("/");
    }

    toString(): string {
        return `ProjectData { id: ${this.id}, name: "${this.name}", description: "${this.description}", startDate: ${this.startDate.toISOString()}, image: "${this.image}", endDate: ${this.endDate ? this.endDate.toISOString() : "undefined"} }`;
    }
}
export const projectDataList: ProjectData[] = [
    new ProjectData(1, "Portfolio", "Description for Portfolio", new Date("2023-01-01"), "/api/v1/anime/gif/1"),
    new ProjectData(2, "Level up Tracker", "Description for Level up Tracker", new Date("2023-01-02"), "/api/v1/anime/gif/1"),
    new ProjectData(3, "The KM Project", "Description for The KM Project", new Date("2023-01-03"), "/api/v1/anime/gif/1"),
    new ProjectData(4, "SCOG", "Description for SCOG", new Date("2023-01-04"), "/api/v1/anime/gif/1"),
    new ProjectData(5, "Horror game", "Description for Horror game", new Date("2023-01-05"), "/api/v1/anime/gif/1"),
    new ProjectData(6, "Dungeon Generator", "Description for Dungeon Generator", new Date("2023-01-06"), "/api/v1/anime/gif/1"),
    new ProjectData(7, "Tower Of Babel", "Description for Tower Of Babel", new Date("2023-01-07"), "/api/v1/anime/gif/1"),
    new ProjectData(8, "Grid system", "Description for Grid system", new Date("2023-01-08"), "/api/v1/anime/gif/1"),
    new ProjectData(9, "Tower Defence", "Description for Tower Defence", new Date("2023-01-09"), "/api/v1/anime/gif/1"),
    new ProjectData(10, "Goblin S", "Description for Goblin S", new Date("2023-01-10"), "/api/v1/anime/gif/1"),
    new ProjectData(11, "Taho Toss", "Description for Taho Toss", new Date("2023-01-11"), "/api/v1/anime/gif/1"),
    new ProjectData(12, "Face-Recog", "Description for Face-Recog", new Date("2023-01-12"), "/api/v1/anime/gif/1"),
    new ProjectData(13, "Crwn-clothing", "Description for Crwn-clothing", new Date("2023-01-13"), "/api/v1/anime/gif/1"),
    new ProjectData(14, "Toxic Bloom", "Description for Toxic Bloom", new Date("2023-01-14"), "/api/v1/anime/gif/1"),
    new ProjectData(15, "Bloody buds", "Description for Bloody buds", new Date("2023-01-15"), "/api/v1/anime/gif/1"),
    new ProjectData(16, "Elemental Conquest", "Description for Elemental Conquest", new Date("2023-01-16"), "/api/v1/anime/gif/1"),
    new ProjectData(17, "Illuminagent", "Description for Illuminagent", new Date("2023-01-17"), "/api/v1/anime/gif/1"),
    new ProjectData(18, "Builder Defender", "Description for Builder Defender", new Date("2023-01-18"), "/api/v1/anime/gif/1"),
    new ProjectData(19, "Featherd Fiasco", "Description for Featherd Fiasco", new Date("2023-01-19"), "/api/v1/anime/gif/1")
];
