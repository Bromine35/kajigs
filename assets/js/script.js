
document.getElementById("list-names-main").innerHTML = "Loading List..."
fetch('data/threads.json')
.then(data => data.json())
.then(data => {
    document.getElementById("list-names-main").innerHTML = ""
    let fulldata = ''

    data.forEach(object => {
        fulldata += `
        <li class="doc-card">
            <a href="${"viewer/index.html?id=" + object.id}" class="doc-title">${object.name}</a>
        </li>
        `

    })

    document.getElementById('list-names-main').innerHTML = fulldata
})


fetch("data/sitedata.json")
.then(data => data.json())
.then(data => {
    document.getElementById("foother").innerHTML = `Version ${data.version} (FR). <a href="https://github.com/Bromine35/kajigs/">GitHub Repo.</a> Licensed Under the Mozilla Public License 2.0. Made by Bromine35.`
})