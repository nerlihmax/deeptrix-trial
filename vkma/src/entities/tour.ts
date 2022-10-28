import { Guide } from '@/entities/guide';

export type Tour = {
    id: string;
    name: string;
    description: string;
    datetime: string;
    durationByFeet: number;
    durationByCar: number;
    maxDuration: number;
    address: string;
    visitorsCount: number;
    cost: number;
    features: string[];
    images: string[];
    guide: Guide;
};
