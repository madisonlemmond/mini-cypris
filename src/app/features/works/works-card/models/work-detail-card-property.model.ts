import { WorkDetail } from "./work-detail.model";

export interface WorkDetailCardProperty {
    property: keyof WorkDetail;
    label: string;
    icon?: string;
    type: 'text' | 'tag'
    format?: (value: any) => any
}