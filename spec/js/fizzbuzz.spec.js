describe('Fizz Buzz Game', function(){

    let sut;
    
    beforeEach(function(){
        sut = new FizzBuzz();
    })

    describe('getFizzBuzzValue', function(){

        describe('for plain numbers', function(){

            let numberValues = [1, 2, 4, 7, 8, 11];

            numberValues.forEach(num =>{
                it('should return ' + num + ' for ' + num, function(){
                    expect(sut.getFizzBuzzValue(num)).toBe(num + '');
                });
            })
        })
        xit('should return 1 for 1', function(){
            expect(getFizzBuzzValue(1)).toBe('1');
        });

        xit('should return 2 for 2', function(){
            expect(getFizzBuzzValue(2)).toBe('2');
        });

        it('should return Fizz for 3', function(){
            expect(sut.getFizzBuzzValue(3)).toBe('Fizz');
        });

        it('should return Buzz for 5', function(){
            expect(sut.getFizzBuzzValue(5)).toBe('Buzz');
        });

        it('should return FizzBuzz for 15', function(){
            expect(sut.getFizzBuzzValue(15)).toBe('FizzBuzz');
        });
    })

    describe('DOM element', function(){
        beforeEach(function(){
            fizzBuzzButton = document.querySelector('#fizzbuzz-button');
            fizzBuzzNumber = document.querySelector('#fizzbuzz-number');
            fizzBuzzValue = document.querySelector('#fizzbuzz-value');
        })

        describe('button', function(){
            it('should exist', function(){
                expect(fizzBuzzButton).not.toBeNull();
            })

        })

        describe('number container', function(){
            it('should exist', function(){
                expect(fizzBuzzNumber).not.toBeNull();
            })

            it('should initially display 0', function(){
                sut.setInitialNumber();
                expect(fizzBuzzNumber.innerText).toBe('0');
            })
        })

        describe('fizzbuzz container', function(){
            it('should exist', function(){
                expect(fizzBuzzValue).not.toBeNull();
            })

            it('should initially display 0', function(){
                sut.setInitialFizzBuzzValue();
                expect(fizzBuzzValue.innerText).toBe('0');
            })
        })
    })

})