const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    
    console.log(data);

    document.getElementById("title").innerHTML = `ADVICE #${data.slip.id}`
    document.getElementById("text").innerHTML =`"${data.slip.advice}"`
}

fetchAdvice()