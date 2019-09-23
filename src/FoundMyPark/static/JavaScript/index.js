    
let req = new XMLHttpRequest();
req.addEventListener("progress", function(e) {
});
req.addEventListener("error", function(e) {
    
});
req.addEventListener("load", function(e) {
    let response = JSON.parse(req.responseText);
    console.log(response)
})
req.open("GET", "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=9rfRd2gDc3I7mr7q1amjTykveR9305Rz9WDbqsv8");
req.setRequestHeader("Authorization", 'Token token="9rfRd2gDc3I7mr7q1amjTykveR9305Rz9WDbqsv8"');
req.send();
