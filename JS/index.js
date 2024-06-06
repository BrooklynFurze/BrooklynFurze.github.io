//when the document loads
document.addEventListener('DOMContentLoaded', function() {
    
    const text = "Brooklyn Furze"; 
    const heading = document.getElementById('name');
    let index = 0;

    function type() {
        //loop through the length of the above text and add it character by character to what is displayed
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); //how often (in ms) it adds a new character
        } 
    }

    //run the function
    type();
});