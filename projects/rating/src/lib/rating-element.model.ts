export class RatingElement {
    constructor (
      private isActive: boolean = false,
      private isHovered: boolean = false,
      private isPartyallyActive: boolean = false
    ) {}

    public setActiveValue(value: boolean): void {
      this.isActive = value;
    }
    public setPartuallyActiveValue(value: boolean): void {
      this.isPartyallyActive = value;
    }

    public getActiveValue(): boolean {
      return this.isActive;
    }

    public getPartuallyActiveValue(): boolean {
        return this.isPartyallyActive;
    }

    public setHoverValue(value: boolean): void {
        this.isHovered = value;
    }

    public getHoverValue(): boolean {
        return this.isHovered;
    }
}
