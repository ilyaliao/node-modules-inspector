import process from 'node:process'
import { consola } from 'consola'
import { storage } from '~~/node/storage'
import { createWsServer } from '~~/node/ws'

consola.restoreAll()

export default lazyEventHandler(async () => {
  const ws = await createWsServer({
    cwd: process.cwd(),
    storage,
  })

  return defineEventHandler(async () => {
    return await ws.getMetadata()
  })
})
