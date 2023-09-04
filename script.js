// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

function fetchOpenAIResponse() {
    const prompt = document.getElementById('prompt').value;
    const responseLabel = document.getElementById('response');

    if (!prompt) {
        responseLabel.innerText = 'Please enter a prompt.';
        return;
    }

    const requestBody = {
        prompt: prompt,
        max_tokens: 50, // Adjust the desired response length
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        responseLabel.innerText = data.choices[0].text;
    })
    .catch(error => {
        responseLabel.innerText = 'An error occurred while fetching the response.';
        console.error(error);
    });
}
