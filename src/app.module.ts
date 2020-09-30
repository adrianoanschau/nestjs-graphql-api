import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { MessagesModule } from "./messages/messages.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { TasksModule } from "./tasks/tasks.module";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./interceptors/all-exceptions.filter";

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/',
      context: ({ req }) => ({ req }),
      definitions: {
        path: join(process.cwd(), '/src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MessagesModule,
    UsersModule,
    AuthModule,
    TasksModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ]
})
export class AppModule {}
