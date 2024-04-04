import { Assert } from '@util/assert.util';
export class CreateUserDto {
    public readonly email: string;
    public readonly password: string;
    public readonly name: string;

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
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

        Assert.isString(params.name, "O campo 'name' precisa ser uma string.");
        Assert.isEmpty(params.name, "O campo 'name' deve ser enviado");
    }

    static fromArray(params: any): CreateUserDto {
        this.validate(params);
        return new CreateUserDto(params.email, params.password, params.name);
    }
}
