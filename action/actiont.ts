'use server'

import prisma from "@/lib/prismaDb"

export async function  uploadDb(value,url) {

    console.log("Hello")

    const route = await prisma.route.upsert({
        where: {
          path: value, // Check if a Route with path "hello" exists
        },
        update: {
          // If it exists, add new files to the existing route
          files: {
            create: [
              { fileUrl: url },
            ],
          },
        },
        create: {
          path: value, // Create new Route with the path "hello"
          files: {
            create: [
              { fileUrl: url },
            ],
          },
        },
      });

      console.log(route)
    
    
    
  }
