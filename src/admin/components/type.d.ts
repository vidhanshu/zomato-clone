import { IconType } from "react-icons";

export interface IDashboardCardProps {
    count: number;
    title: string;
    percent: number;
    Icon: IconType;
    mode?: 'dark' | 'light';
}