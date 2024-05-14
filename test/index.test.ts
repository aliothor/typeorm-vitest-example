import { describe, it, beforeAll, afterAll } from 'vitest'
import { initDatabase } from '../src'
import { writeData, readData } from '../src/query'


describe('typeorm测试', () => {

    beforeAll(async () => {
        await initDatabase()
    })

    it('writeData', async () => {
        const res = await writeData("2", "dom3")
        console.log(res);

    })

    it('init', async () => {
        const res = await readData("2")
        console.log(res);
    })

    it("node abi", () => {
        // console.log(process.versions);
    })
})