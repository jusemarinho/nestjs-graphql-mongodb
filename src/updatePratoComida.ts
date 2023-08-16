import { Field, InputType, Int } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class UpdatePratoComidaInputDTO {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => [String], { nullable: true })
  graos?: string[];

  @Field(() => [String], { nullable: true })
  legumes?: string[];

  @Field(() => [String], { nullable: true })
  proteinas?: string[];
}
