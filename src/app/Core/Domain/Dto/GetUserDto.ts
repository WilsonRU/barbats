import { Assert } from '@util/assert.util';

export class GetUserDto {
    public readonly email: string;
    public readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    private static validate(params: any): void {
        Assert.isString(
            params.email,
            "O campo 'email' precisa ser uma string.",
        );
        Assert.isEmpty(params.email, "O campo 'email' deve ser enviado");

        Assert.isString(
            params.password,
            "O campo 'password' precisa ser uma string.",
        );
        Assert.isEmpty(params.password, "O campo 'password' deve ser enviado");
    }

    static fromArray(params: any): GetUserDto {
        this.validate(params);
        return new GetUserDto(params.email, params.password);
    }
}
