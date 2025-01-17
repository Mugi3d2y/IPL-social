export class Main {

    isNumberOfCharactersUpperThan7(password) {
        if(password.length < 8) {
            return false;
        }
        return true;
    }

    containsSpecialCharater(password) {
        const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '='];
        for(let char of password){
            if(specialCharacters.includes(char)){
                return true;
            }
        }
        return false;
    }

    containsANumber(password) {
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for(let char of password){
            if(numbers.includes(char)){
                return true;
            }
        }
        return false;
    }

    containsIPL(password){
        return password.toLowerCase().includes('ipl');
    }
    
}
