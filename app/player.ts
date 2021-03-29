import { Person } from "./person";

export class Player implements Person {
    
    name: string;
    age?: number | undefined;
    
    formatName(): string {
        return this.name.toUpperCase();
    }

}