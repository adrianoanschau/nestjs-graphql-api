# Migration `20200929190932-create_task_change_log`

This migration has been generated by Adriano Anschau at 9/29/2020, 4:09:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."TaskChangeLog" (
"id" SERIAL,
"status" "TaskStatus"  NOT NULL ,
"updatedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"taskId" integer   NOT NULL ,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."TaskChangeLog" ADD FOREIGN KEY ("taskId")REFERENCES "public"."Task"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."TaskChangeLog" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200929184435-task_with_status..20200929190932-create_task_change_log
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -32,5 +32,13 @@
   id    Int @default(autoincrement()) @id
   description String
   status TaskStatus @default(value: TODO)
   user  User @relation
+}
+
+model TaskChangeLog {
+  id    Int @default(autoincrement()) @id
+  task Task @relation
+  user User @relation
+  status TaskStatus
+  updatedAt DateTime @default(now())
 }
```

