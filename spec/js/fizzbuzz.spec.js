describe('Fizz Buzz Game', function(){

    describe('getFizzBuzzValue', function(){
        it('should return 1 for 1', function(){
            expect(getFizzBuzzValue(1)).toBe('1');
        });

        it('should return 2 for 2', function(){
            expect(getFizzBuzzValue(2)).toBe('2');
        });

        it('should return Fizz for 3', function(){
            expect(getFizzBuzzValue(3)).toBe('Fizz');
        })
    })

})