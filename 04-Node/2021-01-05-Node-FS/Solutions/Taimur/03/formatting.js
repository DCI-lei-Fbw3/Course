exports.prepareString = input => {
    let result = removeWhitespace(input);
    let tmpArray = result.split(" ");

    tmpArray = tmpArray.map(el => capitalizeInitial(el));
    result = tmpArray.join(" ");

    return result;
};

const removeWhitespace = input => {
    // trim space off the ends
    let result = input.trim();

    // collapse duplicate spaces
    result = result.replace(/\s+/g, " ");

    return result;
};

const capitalizeInitial = input => {
    let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return result;
};
