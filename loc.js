// Getting the country code from the user's IP
$.get("https://api.ipdata.co?api-key=03bd3e2ae37c8276ad4fefdc8c4431962c6fa9be6f331a9bf440dcfd", function (response) {
    if (response.country_code == 'RO') {
    } else {
        window.location.replace("https://fcevision.ro/en/");
    };
}, "jsonp");