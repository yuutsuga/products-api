-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "updateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" BOOLEAN NOT NULL DEFAULT false
);
