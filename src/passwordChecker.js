export class Main {

    isPasswordValid(password) {
        console.log("" + password.length);
        
        if(password.length < 8) {
            return false;
        }
        return true;
    }
    
}
