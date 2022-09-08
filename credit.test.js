import { it, expect } from "vitest";
import { maskify } from "./credit";

/**
 * Ejercicio: https://www.codewars.com/kata/5412509bd436bd33920011bc/
 * 
 * Nos han dado el conjunto de tests que tiene que pasar neustra función. Tu objetivo es implementar un método que enmascare los primeros carácteres de un string, dejando visible solamente los últimos 4.
 * 
 * Metodologia:
 * 
 * 1. Descomenta el siguiente test
 * 2. Ejecuta "npm test"
 * 3. Comprueba si pasa el test. Si no lo pasa, codifica el mínimo código necesario para que pase e ltext
 * 4. Repite el punto 1 hasta que tu función pase todos los tests.
 * 
 * Consejo: Intenta no pensar en como resolver TODO el problema, solo un test cada vez
 */

it('should return empty string if given an emptry string', () => {

    const result = maskify("");
    expect(result).toBe("");
}); 

 it('should return the same string if the string has less than 4 characters', ()=> {
    const result = maskify("1");
    expect(result).toBe("1");
}); 

 it('should mask the last 4 characters of the string', () => {
    const result = maskify("12345");
    expect(result).toBe("#2345");
}); 

 it('should mask the last 4 characters of the string of a real credit card number', () => {
    const result = maskify("4556364607935616");
    expect(result).toBe("############5616");
}); 