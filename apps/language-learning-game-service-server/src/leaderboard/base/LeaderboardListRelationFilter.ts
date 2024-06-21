/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeaderboardWhereInput } from "./LeaderboardWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LeaderboardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LeaderboardWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardWhereInput)
  @IsOptional()
  @Field(() => LeaderboardWhereInput, {
    nullable: true,
  })
  every?: LeaderboardWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeaderboardWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardWhereInput)
  @IsOptional()
  @Field(() => LeaderboardWhereInput, {
    nullable: true,
  })
  some?: LeaderboardWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeaderboardWhereInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardWhereInput)
  @IsOptional()
  @Field(() => LeaderboardWhereInput, {
    nullable: true,
  })
  none?: LeaderboardWhereInput;
}
export { LeaderboardListRelationFilter as LeaderboardListRelationFilter };
