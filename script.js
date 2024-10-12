async function sendQuery() {
    const query = document.getElementById("queryInput").value;

    try {
        const response = await fetch('https://ayushkush2402-task.hf.space/find_best_match/', { // Update with your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // Display results
        if (data.similar_sentence && data.best_match) {
            document.getElementById("resultOutput").innerText = `Similar Sentence: ${data.similar_sentence}\nBest Match: ${data.best_match}`;
        } else {
            document.getElementById("resultOutput").innerText = "Stock not found";
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById("resultOutput").innerText = 'Error: ' + error.message;
    }
}
