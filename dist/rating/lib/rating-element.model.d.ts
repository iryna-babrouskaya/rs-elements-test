export declare class RatingElement {
    private isActive;
    private isHovered;
    private isPartyallyActive;
    constructor(isActive?: boolean, isHovered?: boolean, isPartyallyActive?: boolean);
    setActiveValue(value: boolean): void;
    setPartuallyActiveValue(value: boolean): void;
    getActiveValue(): boolean;
    getPartuallyActiveValue(): boolean;
    setHoverValue(value: boolean): void;
    getHoverValue(): boolean;
}
