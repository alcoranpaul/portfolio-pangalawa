import { File } from "./file.ts";

export class Directory {
    private directory_name: string;
    private directory_children: (Directory | File)[];

    constructor(directory_name: string, directory_children: (Directory | File)[]) {
        this.directory_name = directory_name;
        this.directory_children = directory_children;
    }

    public Name() {
        return this.directory_name;
    }

    public Children() {
        return this.directory_children;
    }
}
