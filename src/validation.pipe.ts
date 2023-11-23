import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const eror = await validate(object);
    if (eror.length > 0) {
      throw new BadRequestException("Validation failed");
    }
  }

  private toValidate(metatype: any): boolean {
    // type MyFunctionType = (arg: any) => any;
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
