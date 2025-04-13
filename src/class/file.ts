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

    public Link() {
        return this.link;
    }
    
}