describe("Calculator", function(){

    beforeEach(function(){
        calc = new Calculator;
    });

    describe("Addition test", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it ("should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        });
    });
    describe(" Subtraction test", function(){
        it("should return -29", function(){
            calc.sub(14);
            calc.sub(15);
            expect(calc.value).toBe(-29);
        });
    });
 /*   describe("Multiplication test", function(){
        it("should return 30", function(){
            expect(calc.mul(3,10)).toBe(30);
        });
    });*/
}); 