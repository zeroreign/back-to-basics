import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString, Min, ValidateIf } from "class-validator";
import { IsOnlyQueryArg } from "./pokemon.validators";

@ArgsType()
export class GetPokemonQueryArgs {
  @Field({ nullable: true })
  @ValidateIf((o, value) => o.id === undefined || o.id === null)
  @IsOnlyQueryArg({message: 'Query by name or ID, but not both'})
  @IsNotEmpty({message: 'A Name or ID is required, but none was provided'})
  @IsString({message: 'Name must be a string'})
  name?: string;

  @Field({ nullable: true })
  @ValidateIf((o, value) => o.name === undefined || o.name === null)
  @IsOnlyQueryArg({message: 'Query by name or ID, but not both'})
  @IsNotEmpty({message: 'A Name or ID is required, but none was provided'})
  @Min(1, {message: 'There is no pokemon with an ID less than 1'})
  id?: number;

}
