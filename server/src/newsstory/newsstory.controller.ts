import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsstoryService } from "./newsstory.service";
import { NewsstoryControllerBase } from "./base/newsstory.controller.base";

@swagger.ApiTags("newsstories")
@common.Controller("newsstories")
export class NewsstoryController extends NewsstoryControllerBase {
  constructor(protected readonly service: NewsstoryService) {
    super(service);
  }
}
