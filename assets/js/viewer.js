fetch("../../data/first-message.txt")
    .then(response => response.json())
    .then(data => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')

        let error;

        data.forEach(childArray => {
            if (Array.isArray(childArray) && childArray.length >= 2) {
                let [frist, second] = childArray;
                
                if (second == id) {
                    error = false;
                    writePost(frist);
                } else {
                    if (error !== false) {
                        error = true;
                    }
                }
            }
        });
        if (error) {
            writePost("This post has been deleted, or our archiving system broke this post along the way. If this post is still up on TN, we will fix the issue. Please report this on GitHub (include the link).")
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

function writePost(data) {
    document.getElementById("main").innerHTML = markdown.toHTML(data);
}
