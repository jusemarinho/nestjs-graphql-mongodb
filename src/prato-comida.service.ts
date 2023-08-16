import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PratoComida, PratoComidaDocument } from "./prato-comida.entity";
import { CreatePratoComidaInputDTO } from "./createPratoComida.dto";
import { UpdatePratoComidaInputDTO } from "./updatePratoComida";

@Injectable()
export class PratoComidaService {
  constructor(
    @InjectModel(PratoComida.name)
    private readonly pratoComidaModel: Model<PratoComidaDocument>
  ) {}

  async create(createPratoComidaDto: CreatePratoComidaInputDTO): Promise<PratoComida> {
    const createdPratoComida = new this.pratoComidaModel(createPratoComidaDto);
    return createdPratoComida.save();
  }

  async findAll(): Promise<PratoComida[]> {
    return this.pratoComidaModel.find().exec();
  }

  async findOne(id: string): Promise<PratoComida> {
    return this.pratoComidaModel.findById(id).exec();
  }

  async update(
    updatePratoComidaInput: UpdatePratoComidaInputDTO
  ): Promise<PratoComida> {
    return this.pratoComidaModel
      .findByIdAndUpdate(updatePratoComidaInput._id, updatePratoComidaInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<PratoComida> {
    return this.pratoComidaModel.findByIdAndRemove(id).exec();
  }
}
