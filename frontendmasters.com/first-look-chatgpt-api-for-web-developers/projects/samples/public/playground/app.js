
async function send() {
    const prompt = document.querySelector("#prompt").value;
    document.querySelector("#prompt").textContent = "";

    const payload = {
        prompt: prompt
    };

    const response = await fetch("http://localhost:3000/api/general", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    const data = await response.json();
    
    document.querySelector("output").textContent = data.content;
}