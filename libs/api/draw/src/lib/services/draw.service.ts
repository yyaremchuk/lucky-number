import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Draw } from '@lucky-number/models';

@Injectable()
export class DrawService {
  constructor(@InjectModel('Draw') private readonly drawModel: Model<Draw>) {}

  public async findAll(): Promise<Draw[]> {
    return await this.drawModel.find().sort('-date');
  }

  public async findOne(id: string): Promise<Draw> {
    return await this.drawModel.findOne({ _id: id });
  }

  public async create(draw: Draw): Promise<Draw> {
    const newItem = new this.drawModel(draw);
    return await newItem.save();
  }

  public async update(id: string, draw: Draw): Promise<Draw> {
    return await this.drawModel.findByIdAndUpdate(id, draw, { new: true });
  }
}
