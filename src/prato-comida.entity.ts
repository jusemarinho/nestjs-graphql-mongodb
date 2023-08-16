import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@ObjectType()
@Schema()
export class PratoComida {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => [String])
  @Prop()
  graos: string[];

  @Field(() => [String])
  @Prop()
  legumes: string[];

  @Field(() => [String])
  @Prop()
  proteinas: string[];
}

export type PratoComidaDocument = PratoComida & Document;
export const PratoComidaSchema = SchemaFactory.createForClass(PratoComida);
