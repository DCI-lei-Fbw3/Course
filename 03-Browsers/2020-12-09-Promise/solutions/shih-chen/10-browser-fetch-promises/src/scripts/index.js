// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let checkPromise = new Promise((resolve, reject) => {
    resolve(
        setTimeout(()=> {
        document.querySelector(".modal").style.display ="block";        
        }, 2000));    
      });
    
  checkPromise.then(() => {
		document.querySelector("#myModal").addEventListener("click", () => {
			document.querySelector(".modal").style.display="none";
		  });
    })
    
  checkPromise.catch((e) => console.error(e));

   
