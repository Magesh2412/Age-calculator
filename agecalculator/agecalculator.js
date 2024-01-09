
document.querySelector("#submit").addEventListener("click", function() {
    const dobValue = document.querySelector("#dob").value;
    

    if (!dobValue) {
        document.querySelector("#error-message").innerHTML = "Please enter a value";
        return; 
    }

    document.querySelector("#error-message").innerHTML = "";

    const update = function() {
        let dob = dobValue, // Use the stored value instead of querying the DOM again
            day = new Date(dob),
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            value = timenow - time,
            sec = Math.floor(value / 1000),
            min = Math.floor(value / (1000 * 60)),
            hour = Math.floor(value / (1000 * 60 * 60)),
            days = Math.floor(value / (1000 * 60 * 60 * 24)),
            week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            year = Math.floor(value / (1000 * 60 * 60 * 24 * 365));

        let insert = function(x, y) {
            document.querySelector(x).innerHTML = y;
        }
        insert("#year", year + "  -year");// insert(#year`${year}  `)
        insert("#month", month + "-month");
        insert("#week", week + "-week");
        insert("#day", days + "-day");
        insert("#hour", hour + "-hour");
        insert("#min", min + "-minutes");
        insert("#sec", sec + "-seconds");
    }

    setInterval(update, 10);
});

