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
        const options = {
            breaks: true // is this what todo wanted??
        };

        const html = marked.parse(data, options);
        parseAsText(html)
        document.getElementById("main").innerHTML = html;
    }


fetch("../../data/threads.json")
    .then(response => response.json())
    .then(data => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')

        window.parentname = '';
        let found = false;

        data.forEach(childArray => {
            if (childArray.id == id) {
                window.title = childArray.name
                document.getElementById("kajig-title").innerHTML = childArray.name
                found = true;
            }
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

    function parseAsText(unparsed) {
        unparsed = unparsed.replace(/<!--.*?-->/gs, "");
        unparsed = unparsed.replace(/<p>/g, "");
        unparsed = unparsed.replace(/<\/p>/g, "");
        unparsed = unparsed.replace(/<div>/g, "");
        unparsed = unparsed.replace(/<\/div>/g, "");
        unparsed = unparsed.replace(/<br>/g, "\n");
        unparsed = unparsed.replace(/<a[^>]*>/g, "");
        unparsed = unparsed.replace(/<\/a>/g, "");
        unparsed = unparsed.replace(/&quot;/g, '"');
        unparsed = unparsed.replace(/&#39;/g, "'");
        unparsed = unparsed.replace(/&lt;/g, '<');
        unparsed = unparsed.replace(/&gt;/g, '>');
        unparsed = unparsed.replace(/<ul>/g, "");
        unparsed = unparsed.replace(/<\/ul>/g, "");
        unparsed = unparsed.replace(/<li>/g, "- ");
        unparsed = unparsed.replace(/<\/li>/g, "");
        unparsed = unparsed.replace(/<ol>/g, "");
        unparsed = unparsed.replace(/<\/ol>/g, "");
        unparsed = unparsed.replace(/<h1>/g, "");
        unparsed = unparsed.replace(/<\/h1>/g, "");
        unparsed = unparsed.replace(/<h2>/g, "");
        unparsed = unparsed.replace(/<\/h2>/g, "");
        unparsed = unparsed.replace(/<h3>/g, "");
        unparsed = unparsed.replace(/<\/h3>/g, "");
        unparsed = unparsed.replace(/<h4>/g, "");
        unparsed = unparsed.replace(/<\/h4>/g, "");
        unparsed = unparsed.replace(/<h5>/g, "");
        unparsed = unparsed.replace(/<\/h5>/g, "");
        unparsed = unparsed.replace(/<h6>/g, "");
        unparsed = unparsed.replace(/<\/h6>/g, "");
        unparsed = unparsed.replace(/<small>/g, "(");
        unparsed = unparsed.replace(/<\/small>/g, ")");
        unparsed = unparsed.replace(/<code>/g, "`");
        unparsed = unparsed.replace(/<\/code>/g, "`");
        unparsed = unparsed.replace(/<pre>/g, "");
        unparsed = unparsed.replace(/<\/pre>/g, "");
        
        window.parsed = unparsed
    }    

    function generateText() {
        if (!window.parsed || !window.title) {
            alert("Whoops! Text not generated. Try again very soon.");
            return;
        }
    
        let text = window.parsed;
        console.log(text);
        
        let newText = `Kajig Title: ${window.title}

--- Kajig Writeup: 

${text}
        `
        const blob = new Blob([newText], { type: "text/plain" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = "export" + ".txt";
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    