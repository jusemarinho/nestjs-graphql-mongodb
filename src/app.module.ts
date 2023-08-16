import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { PratoComidaService } from "./prato-comida.service";
import { PratoComidaResolver } from "./prato-comida.resolver";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose";
import { PratoComida, PratoComidaSchema } from "./prato-comida.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_DATABASE_URL),
    MongooseModule.forFeature([
      {
        name: PratoComida.name,
        schema: PratoComidaSchema,
        collection: "PRATOS_COMIDAS",
      },
    ]),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [PratoComidaService, PratoComidaResolver],
})
export class AppModule {}
