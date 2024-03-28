import { Assert } from '@util/assert.util';
export class CreateUserDto {
    private readonly email: string;
    private readonly password: string;
    private readonly name: string;

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getName(): string {
        return this.name;
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
