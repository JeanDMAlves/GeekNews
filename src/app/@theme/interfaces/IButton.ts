export interface IButton {
    label: string;
    class?: string;
    icon?: string;
    action?: (variable?:any) => void;
}
