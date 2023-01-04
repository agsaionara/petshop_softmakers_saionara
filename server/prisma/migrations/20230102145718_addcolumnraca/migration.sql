/*
  Warnings:

  - Added the required column `raca` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "raca" VARCHAR(255) NOT NULL;
