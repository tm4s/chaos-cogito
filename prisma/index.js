import prisma from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  
  const tests = await prisma.test()
  console.log(tests)
}

main().catch(e => console.error(e))