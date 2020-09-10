
optionalArgument();
optionalArgument("argument given");

function optionalArgument(argument) {
    argument = argument || "default"
    console.log(argument);
}
