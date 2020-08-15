const toggleStyles = href => {
    href = href.split('/')
    console.log(href)
    if (href[href.length - 1] == 'light-mode.css')
        return href[0] + '/' + href[1] + '/dark-mode.css'
    return href[0] + '/' + href[1] + '/light-mode.css'
}

document.addEventListener("DOMContentLoaded", e => {
    document.getElementById('toggle-mode').addEventListener('change', e => {
        const mode = document.getElementsByTagName('link')[1]
        mode.setAttribute("href", toggleStyles(mode.getAttribute('href')))  
    })
})