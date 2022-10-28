-- CreateTable
CREATE TABLE "Guide" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "guide_id" TEXT NOT NULL,
    "durationByFeet" INTEGER,
    "durationByCar" INTEGER,
    "maxDuration" INTEGER,
    "visitorsCount" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "features" TEXT[],
    "images" TEXT[],

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_guide_id_fkey" FOREIGN KEY ("guide_id") REFERENCES "Guide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
