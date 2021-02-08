// Welcome FbW3!
//Topic: MongoDB - Scheme, Modeling, & Validation
//Reference:

//Scheme & Modeling

/* 
- Scheme and modeling go hand in hand 
- Modeling is the process of create cast for you data. 
- So if your data is modelled to a certain scheme, then all 
new data will take the same shape 
- Scheme helps you define the shape of the data. 
- Validation: is the process of making sure all new data fits the sceheme (shape) you 
have chosen.
- Querying: is the process of calling the data you want
*/

//Validation Example

//this is how the new data should look like
const scheme = {
'name': "xyz",
'address': "abc",
'phone': '123'
}

const newData = {
'address': "abc",
'phone': '123'
}

/*
- We can see that the new data is not fitting into the dummy scheme above. 
- Your programme needs to be able to detect this non-fitting, and this process of detection
conformities is called validation. However, validation usually also involves the process of
"what to do next"?
- Validation is usually programmed to happen right at the doorstep of the doorstep,
right when the data is being sent to (before being stored).
 */
