export class Main {

    isPasswordValid(password) {
        if(password.length < 8) {
            return false;
        }
        return true;
    }
    
}
