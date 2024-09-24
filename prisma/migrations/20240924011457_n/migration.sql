-- CreateTable
CREATE TABLE "PrivateLink" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "message" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PrivateLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrivateLink" ADD CONSTRAINT "PrivateLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
