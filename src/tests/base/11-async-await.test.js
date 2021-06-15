import { getImagen } from "../../base/11-async-await"

describe('test async await API giphy',()=>{
    test('should restun the url', async () => {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    })
    
})