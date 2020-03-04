
class FizzBuzz{
    
    constructor(){
        this.number = 0;
    }
    
    getFizzBuzzValue(number){
        if(this.isMultipleOf3(number) && this.isMultipleOf5(number)){
            return "FizzBuzz";
        }
        else if(this.isMultipleOf3(number)){
            return "Fizz";
        }
        else if(this.isMultipleOf5(number)){
            return "Buzz";
        }
        return number + "";
    }
    
    isMultipleOf3(number){
        if (number % 3 === 0) {
            return true;
        }
        return false;
        
    }

    isMultipleOf5(number){
        if (number % 5 === 0) {
            return true;
        }
        return false;
    }
    
    setInitialNumber(){
        document.querySelector('#fizzbuzz-number').innerText = "0";
        console.log('setting number to 0');
    }
    
    setInitialFizzBuzzValue(){
        document.querySelector('#fizzbuzz-value').innerText = "0";
    }
    
}

let fizzBuzz = new FizzBuzz();
fizzBuzz.setInitialNumber();
fizzBuzz.setInitialFizzBuzzValue();

// const getFizzBuzzValue = function(number){
    //     if(number % 15 === 0){
        //         return "FizzBuzz";
        //     }
        //     else if(number % 3 === 0){
            //         return "Fizz";
            //     }
            //     else if(number % 5 === 0){
                //         return "Buzz";
                //     }
                //     return number + "";
                // }
                
                // function getFizzBuzzValueVersion2(number){
                    //     return number + "";
                    // }