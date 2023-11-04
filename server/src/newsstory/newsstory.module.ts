import { Module } from "@nestjs/common";
import { NewsstoryModuleBase } from "./base/newsstory.module.base";
import { NewsstoryService } from "./newsstory.service";
import { NewsstoryController } from "./newsstory.controller";

@Module({
  imports: [NewsstoryModuleBase],
  controllers: [NewsstoryController],
  providers: [NewsstoryService],
  exports: [NewsstoryService],
})
export class NewsstoryModule {}
