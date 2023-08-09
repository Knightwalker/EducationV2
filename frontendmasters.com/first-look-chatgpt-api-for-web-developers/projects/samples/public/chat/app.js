const price = 0.0002/1000;
let totalTokens = 0;

async function sendChat() {
    const prompt = document.querySelector("#prompt").value;
    document.querySelector("#prompt").value = "";
    document.querySelector("ul").innerHTML += `<li><b>${prompt}</b></li>`;

    const payload = {
        prompt: prompt
    };

    const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    
    document.querySelector("ul").innerHTML += `<li>${data.content}</li>`;
    document.querySelector("#prompt").value = "";
    document.querySelector("input").focus();
}