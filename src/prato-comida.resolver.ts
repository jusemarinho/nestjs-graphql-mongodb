import { PratoComida } from "./prato-comida.entity";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PratoComidaService } from "./prato-comida.service";
import { CreatePratoComidaInputDTO } from "./createPratoComida.dto";
import { UpdatePratoComidaInputDTO } from "./updatePratoComida";

@Resolver(() => PratoComida)
export class PratoComidaResolver {
  constructor(private readonly pratoComidaService: PratoComidaService) {}

  @Mutation(() => PratoComida)
  async createPratoComida(
    @Args("createPratoComida") createPratoComidaDto: CreatePratoComidaInputDTO
  ): Promise<PratoComida> {
    const createdPratoComida =
      this.pratoComidaService.create(createPratoComidaDto);
    return createdPratoComida;
  }

  @Query(() => [PratoComida], { name: "pratoComidas" })
  findAll() {
    return this.pratoComidaService.findAll();
  }

  @Query(() => PratoComida, {
    name: "pratoComidaPeloId",
    description: "Irá trazer o prato de comida pelo Id",
  })
  getPratoComidaPeloId(@Args("id", { type: () => String }) id: string) {
    return this.pratoComidaService.findOne(id);
  }

  @Mutation(() => PratoComida)
  updatePratoComida(
    @Args("updatePratoComidaInput")
    updatePratoComidaInput: UpdatePratoComidaInputDTO
  ) {
    return this.pratoComidaService.update(updatePratoComidaInput);
  }

  @Mutation(() => PratoComida)
  removePratoComida(@Args("id", { type: () => String }) id: string) {
    return this.pratoComidaService.remove(id);
  }
}
