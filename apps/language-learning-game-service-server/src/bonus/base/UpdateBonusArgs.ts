/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BonusWhereUniqueInput } from "./BonusWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BonusUpdateInput } from "./BonusUpdateInput";

@ArgsType()
class UpdateBonusArgs {
  @ApiProperty({
    required: true,
    type: () => BonusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BonusWhereUniqueInput)
  @Field(() => BonusWhereUniqueInput, { nullable: false })
  where!: BonusWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BonusUpdateInput,
  })
  @ValidateNested()
  @Type(() => BonusUpdateInput)
  @Field(() => BonusUpdateInput, { nullable: false })
  data!: BonusUpdateInput;
}

export { UpdateBonusArgs as UpdateBonusArgs };
