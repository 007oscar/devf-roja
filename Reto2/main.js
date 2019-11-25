getQuote = async () => {
    // const location = window.location.hostname;
    const response = await fetch(
    //   `http://${location}:9000/api/sensors/`
        'https://api.kanye.rest'
    );
    const data = await response.json();
    if (response.status !== 200) throw Error(data.message);
    document.getElementById('quote').innerHTML = data.quote
    console.log(data.quote)
    return data;
  };

  window.onload = getQuote()
