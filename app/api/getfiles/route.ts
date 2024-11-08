import prisma from "@/lib/prismaDb";

export async function POST(Req,Res){

    const r=  await Req.json()
    console.log(r)

    const route = await prisma.route.findUnique({
        where: {
          path: r.path, // Find route by its path
        },
        include: {
          files: true, // Include all files related to the route
        },
      });

    return Response.json({ data: route.files})
}