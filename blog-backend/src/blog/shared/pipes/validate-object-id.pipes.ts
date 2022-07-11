import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as mongoose from 'mongoose';


//Con este metodo, cualquier request con un ID que no se encuentre en la BD será invalido
@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) {
        throw new BadRequestException('Invalid ID!');
    }
    return value;
  }
}