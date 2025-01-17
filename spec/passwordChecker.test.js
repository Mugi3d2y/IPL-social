import { Main } from '../src/passwordChecker.js';
   
describe('isPasswordValid should return true for a valid password and false for a non valid password', function() {
    const main = new Main();

    it('should return false if the number of characters is < 8', function() {
        const result = main.isNumberOfCharactersUpperThan7('1234567');

        expect(result).toBe(false);
    });

    it('should return true if the number of characters is >= 8', function() {
        const result = main.isNumberOfCharactersUpperThan7('12345678');

        expect(result).toBe(true);
    });

    it("should return false if password contains not special character", function() {
        const result = main.containsSpecialCharater('123');

        expect(result).toBe(false);
    });

    it("should return true if password contains special character", function() {
        const result = main.containsSpecialCharater('123@');

        expect(result).toBe(true);
    });
    
    it("should return false if password contains not a number", function() {
        const result = main.containsANumber('abc');
        
        expect(result).toBe(false);
    });

    it("should return true if the password contains a number", function() {
        const result = main.containsANumber('abc1');
        
        expect(result).toBe(true);
    });

    

}); 