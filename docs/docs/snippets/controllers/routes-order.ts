import {Controller, Get, PathParams} from "@tsed/common";

@Controller("/calendars")
export class CalendarsController {
  @Get(":id")
  findOne(@PathParams("id") id: string) {
    return `This action returns a #${id} calendar`;
  }

  @Get()
  findAll() {
    // This endpoint will never get called
    // because the "/calendars" request is going
    // to be captured by the "/calendars/:id" route handler
  }
}
