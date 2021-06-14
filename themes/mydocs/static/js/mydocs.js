window.addEventListener("DOMContentLoaded", function (event) {
    console.log("Start This")
    var index = null;
    var lookup = null;
    var queuedTerm = null;

    var form = document.getElementById("search");
    var input = document.getElementById("search-input");

    form.addEventListener("submit", function (event) {

        event.preventDefault();
        var term = input.value.trim();
        if (!term)
            return;

        startSearch(term);
    }, false);

    function startSearch(term) {
        // Start icon animation.
        form.setAttribute("data-running", "true");

        if (index) {
            // Index already present, search directly.
            search(term);
        }
        else if (queuedTerm) {
            // Index is being loaded, replace the term we want to search for.
            queuedTerm = term;
        }
        else {
            // Start loading index, perform the search when done.
            queuedTerm = term;
            initIndex();
        }
    }

    function searchDone() {
        // Stop icon animation.
        form.removeAttribute("data-running");

        var myOffcanvas = document.getElementById('offcanvasExample')
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
        bsOffcanvas.toggle()

    
        queuedTerm = null;
    }

    function initIndex() {
        console.log("initIndex (started)")

        var request = new XMLHttpRequest();
        request.open("GET", "/index.json");
        request.responseType = "json";
        request.addEventListener("load", function (event) {
            lookup = {};
            index = lunr(function () {
                this.ref("uri");

                // If you added more searchable fields to the search index, list them here.
                this.field("title");
                this.field("content");
                this.field("description");
                this.field("categories");

                for (var doc of request.response) {
                    this.add(doc);
                    lookup[doc.uri] = doc;
                }
            });

            // Search index is ready, perform the search now
            search(queuedTerm);
        }, false);
        request.addEventListener("error", searchDone, false);
        request.send(null);
    }

    function search(term) {
        var results = index.search(term);

        // The element where search results should be displayed, adjust as needed.
        var target = document.querySelector("#search-results");
        
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }

        var title = document.createElement("h1");
        title.id = "search-results";
        title.className = "list-title";

        // if (results.length == 0)
        //     title.textContent = `No results found for “${term}”`;
        // else if (results.length == 1)
        //     title.textContent = `Found one result for “${term}”`;
        // else
        //     title.textContent = `Found ${results.length} results for “${term}”`;
        // target.appendChild(title);
        // document.title = title.textContent;

        document.getElementById("sr-term").textContent = term


        var template = document.getElementById("search-result");
        for (var result of results) {
            var doc = lookup[result.ref];

            // Fill out search result template, adjust as needed.
            var element = template.content.cloneNode(true);
            element.querySelector(".sr-link").href = doc.uri;
            element.querySelector(".sr-title").textContent = doc.title;
            element.querySelector(".sr-last-mod").textContent = doc.last_mod;
            element.querySelector(".sr-note").textContent = truncate(doc.content, 70);
            target.appendChild(element);
        }
        title.scrollIntoView(true);

        searchDone();
    }

    // This matches Hugo's own summary logic:
    // https://github.com/gohugoio/hugo/blob/b5f39d23b8/helpers/content.go#L543
    function truncate(text, minWords) {
        var match;
        var result = "";
        var wordCount = 0;
        var regexp = /(\S+)(\s*)/g;
        while (match = regexp.exec(text)) {
            wordCount++;
            if (wordCount <= minWords)
                result += match[0];
            else {
                var char1 = match[1][match[1].length - 1];
                var char2 = match[2][0];
                if (/[.?!"]/.test(char1) || char2 == "\n") {
                    result += match[1];
                    break;
                }
                else
                    result += match[0];
            }
        }
        return result;
    }
}, false);