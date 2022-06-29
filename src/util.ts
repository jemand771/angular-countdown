export class ModuloPopper {

    total: number;

    constructor(total: number){
        this.total = total;
    }

    pop(factor: number): number {
        let result = this.total % factor;
        this.total -= result;
        this.total /= factor;
        return result;
    }
}