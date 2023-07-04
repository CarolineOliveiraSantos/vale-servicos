/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contractor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contractor_email_key" ON "Contractor"("email");
