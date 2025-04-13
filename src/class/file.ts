export class File{
    private name: string;
    private link?: string;

    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }

    public Name() {
        return this.name;
    }

    private HasLink() : boolean {
        return this.link !== undefined;
    }

    public GetLink(): string {
        if (this.HasLink()) return this.link!;
        return "";
    }
    
}