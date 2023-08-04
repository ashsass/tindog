/*import Dog from "./Dog"
import { dogs } from "./data"*/

function getHtml() {
    return (
`<header class="header">	
    <img 	
        src="./assets/person-icon.png" 	
        alt="An icon that looks like the outline of a person"	
        class="header--icon"	
    >	
    <img 	
        src="./assets/paw-icon.png" 	
        alt="An image with a red to  orange color gradient with a white paw print in the middle"	
        class="header--icon"	
        >	
    <img 	
        src="./assets/chat-icon.png" 	
        alt="An icon with the outline of a chat bubble"	
        class="header--icon"	
        >	
</header>
<main>	
    <div class="dog">	
        <div class="dog--text">	
            <p class="bold">Teddy, 30</p>	
            <p>How you doin?</p>	
        </div>	
    </div>	
</main>
<footer class="button--container">	
    <img	
        src="./assets/reject-button.png"	
        alt="A button with a large red x"	
        class="reject-button"	
    />	
    <img	
        src="./assets/heart-button.png"	
        alt="A button with a green heart"	
        class="heart-button"	
    />	
</footer>`
)

}

function render() {
    return document.getElementById("root").innerHTML = getHtml()
}

render()