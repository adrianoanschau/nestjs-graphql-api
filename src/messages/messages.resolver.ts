import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";

@Resolver()
export class MessagesResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  messages() {
    return this.prisma.message.findMany();
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    return this.prisma.message.create({
      data: { description },
    });
  }
}
