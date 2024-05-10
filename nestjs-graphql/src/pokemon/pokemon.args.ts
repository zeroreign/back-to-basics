import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetPokemonQueryArgs {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  id?: number;

}
