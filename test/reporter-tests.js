module("My Tests", {});

test("example 1", function(){
    ok(false, "Here is my failure");
});

test("exmaple 2", function(){
    console.log("That was an error!");
    ok(false);
    console.log("Was that an error?");
});

test("example 3", function(){
    ok(true, "Success!");
});

test("example 4", function(){
    equal("First", "Second");
});

test("example 5", function(){
    equal("Win!", "Win!");
});
