import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePratoComidaInputDTO {

  @Field(() => [String])
  graos: string[];

  @Field(() => [String])
  legumes: string[];input

  @Field(() => [String])
  proteinas: string[];
}
