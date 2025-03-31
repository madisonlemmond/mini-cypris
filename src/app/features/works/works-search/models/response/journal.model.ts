import { Identifier } from "./identifier.model";

export interface Journal {
    title: string;
    identifiers: Identifier[];
}