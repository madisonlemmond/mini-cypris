import { Author } from "../../works-search/models/response/author.model";

export interface WorkDetail {
    title: string;
    authors: Author[],
    publisher: string;
    documentType: string;
    fieldOfStudy: string;
    publishedDate: Date;
    acceptedDate: Date;
    downloadUrl: string;
    abstract: string;
    fullText: string;
}