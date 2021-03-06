const template = document.createElement("template");
template.innerHTML = `
<div class="pet-card">
        <div class="avatar">
            <img />
            <div>
                <div class="details">
                    <h2></h2>
                    <div class="info">
                        <p>Breed: <slot name="breed" /> </p>
                        <p>Age: <slot name="age" /> </p>
                    </div>
                    <div class="actions">
                        <button id="greet">Hello!</button>
                        <button id="toggle">View details</button>
                    </div>
                </div>
            </div>
        </div>
</div>
`;

class PetCard extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttribute(){
        return ["name", "avatar"];
    }
    attributeChangedCallback(name, oldValue, newValue){
        this.shadowRoot.querySelector(".details h2").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector(".avatar img").src = this.getAttribute("avatar");
        this.shadowRoot.querySelector(".avatar img").src = this.getAttribute("name");

    }
}

export default PetCard;
