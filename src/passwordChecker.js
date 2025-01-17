export class Main {

    isNumberOfCharactersUpperThan7(password) {
        if(password.length < 8) {
            return false;
        }
        return true;
    }
    
}
