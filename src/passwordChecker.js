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
            return false;
        }
    }
    
}
