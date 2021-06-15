
describe('pruebas del archivo demo.test.js', () => {
    test("isActive debe ser truec", () => {
      const isActive = true;
      expect(isActive).toBe(true);
    });
    
    test("compara strings", () => {
      const hola = "hola mundo";
      const mundo = "hola mundo";
      expect(hola).toBe(mundo);
    });    
})
 