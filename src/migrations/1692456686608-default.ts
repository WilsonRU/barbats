import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692456686608 implements MigrationInterface {
    name = 'Default1692456686608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_rule_enum" AS ENUM('ADMIN', 'USER')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "rule" "public"."users_rule_enum" NOT NULL DEFAULT 'USER', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_rule_enum"`);
    }

}
