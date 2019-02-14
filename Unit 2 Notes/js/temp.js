function say (something) {
  console.log(something);
}

function exec (func, arg) {
 func(arg); 
};

// arg needs to be an acceptable argument. This function passes a function into exec and exec runs it. 

exec(say, "Hi, there");
// say is a function but "Hi, there" is a string

//other way of writing functions above (see below)


function exec (func, arg){
  func(arg);
}

exec ((something) => {
 console.log(something); 
}, 'Greetings, everyone');