import { Main } from '../src/passwordChecker.js';
   
describe('isPasswordValid should return true for a valid password and false for a non valid password', function() {
    const main = new Main();

    it('should return false if the number of characters is < 8', function() {
        const result = main.isPasswordValid('1234567');

        expect(result).toBe(false);
    });

    it('should return true if the number of characters is >= 8', function() {
        const result = main.isPasswordValid('12345678');

        expect(result).toBe(true);
    });
}); 