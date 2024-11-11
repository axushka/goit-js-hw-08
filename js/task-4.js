
const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = form.elements.email.value.trim();
            const password = form.elements.password.value.trim();
            if(email === "" || password === "") { 
                 alert(`All form fields must be filled in`);
                 return;
            } 

            const formNew = {
                email,
                password,
            };
            console.log(formNew);
            form.reset();
            

        });
 
        