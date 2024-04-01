async function getJoke() {

    const jokeContainer = document.getElementById("joke-container");

    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    });

    if (response.ok) {

        try {
            let data = await response.json();

            jokeContainer.innerHTML = "Joke: " + data["joke"];
        }

        catch (error) {
            console.log("There was an error: " + error);
        }
    }

    else {
        console.error("Response was not ok :(");
    }
}