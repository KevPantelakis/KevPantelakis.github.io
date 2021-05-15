var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var message_body = document.getElementsByName("message")[0].value;
    var sender_email = document.getElementsByName("email")[0].value;
    var status = document.getElementById("my-form-status");
    if (message_body != "" && sender_email != ""){
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (document.documentElement.lang === "fr"){
                status.innerHTML = "Merci de m'avoir contacté!";
            }
            else{
                status.innerHTML = "Thanks for reaching out!";
            }
            
            form.reset()
        }).catch(error => {
            if (document.documentElement.lang === "fr"){
                status.innerHTML = "Oops! Un problème est survenu lors du traitement";
            }
            else{
                status.innerHTML = "Oops! There was a problem sending your e-mail";
            }
        });
    }
    else{
        if (document.documentElement.lang === "fr"){
            status.innerHTML = "Veuillez remplir tout les champs";
        }
        else{
            status.innerHTML = "Fill out all fields";
        }
    }
}
form.addEventListener("submit", handleSubmit)