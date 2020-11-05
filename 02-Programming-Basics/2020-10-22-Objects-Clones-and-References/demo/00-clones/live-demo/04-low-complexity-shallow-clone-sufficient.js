let configA = {
	resume: "/home/tom/resume.txt",
	photo: "/home/tom/photo.jpg",
	//...
	// no complex datatype here, so no reference 
}

//let configB = Object.assign({}, configA);
let configB = {...configA};
