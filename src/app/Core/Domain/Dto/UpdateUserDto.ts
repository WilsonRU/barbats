import { Assert } from '@util/assert.util';

export class UpdateUserDto {
    private readonly id: number;
    private readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    private static validate(params: any): void {
        Assert.isNumber(params.id, "O campo 'id' precisa ser number");
        Assert.isEmpty(params.id, "O campo 'id' deve ser enviado.");

        Assert.isString(
            params.email,
            "O campo 'email' precisa ser uma string.",
        );
        Assert.isEmpty(params.email, "O campo 'email' deve ser enviado");
    }

    static fromArray(params: any): UpdateUserDto {
        this.validate(params);

        return new UpdateUserDto(params.id, params.name);
    }
}
