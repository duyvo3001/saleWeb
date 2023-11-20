import { MinLength, IsNotEmpty } from "class-validator";
export class UserDto {
  @IsNotEmpty()
  name?: string;
  @MinLength(7, { message: "Please enter 6" })
  email?: string;
  phoneNumber?: string;
}
