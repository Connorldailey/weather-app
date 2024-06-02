var key = "dba74e00f5a54104873203705240106"; // Pass API key as request parameter through API
var zip = 43050; // Query parameter (zip code)

async function getLocation(key, zip) {
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + zip;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("loc").innerHTML = data.location.name;
        }
        else {
            console.log("Failed to retrieve location.")
        }
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

async function getRegion(key, zip) {
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + zip;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("reg").innerHTML = data.location.region;
        }
        else {
            console.log("Failed to retrieve region.")
        }
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

async function getTemperature(key, zip) {
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + zip;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("temp").innerHTML = data.current.temp_f + "&deg";
        } 
        else {
            console.log("Failed to retreive temperature.")
        } 
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

async function getCondition(key, zip) {
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + zip;
    console.log(url);
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("cond").innerHTML = data.current.condition.text;
        }
        else {
            console.log("Failed to retrieve condition.");
        }
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

async function getIcon(key, zip) {
    const url = "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + zip;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("icn").src = "http:" + data.current.condition.icon;
            console.log(data.current.condition.icon);
        } 
        else {
            console.log("Failed to retrieve icon.");
        }
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

getLocation(key, zip);
getRegion(key, zip);
getTemperature(key, zip);
getCondition(key, zip);
getIcon(key, zip);
