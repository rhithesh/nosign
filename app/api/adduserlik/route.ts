

export async function POST(request: Request,res:Response) {
  const data =await request.json()
  console.log(data)



  return Response.json({ data })

    

}
