(() => {
    // make an AJAX request using the fetch API

    fetch('./data/classData.json')
    .then(res => res.json())  //res=respond
    .then(data => {

        debugger;
        
        // handle data
        handleData(data);

    })


    function handleData(data)
    {
        let courseName = document.querySelector('.profPanelText .text-muted'),
            profname = document.querySelector('.profPanelText .profName'),
            time = document.querySelector('.profPanelText .list-inline');
            
            // Display text
            courseName.innerHTML = data.coursename + "-" +'<span class="text-primary">' + data.coursecode +"</span>";
            
            // display time
            time.innerHTML = "<li>" + "&#128338;" + data.classtime[0] + "</li>" + "<li>" + "&#128338;" + data.classtime[1] + "</li>"
            
            // display name
            profname.innerHTML = "Professor - " + data.profname;
    }


})();