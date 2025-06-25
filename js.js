    const resultDiv = document.getElementById('result');

    if ('geolocation' in navigator) 
    {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resultDiv.innerHTML = `<strong>kkkkkk:</strong> ${lat} <br><strong>kkkkkk:</strong> ${lon}`;
          console.log('info:', lat, lon);
        },
        (error) => {
          resultDiv.innerHTML = 'não deu certoo';
          console.error('erroo:', error);
        }
      );
    } 
    
    else {
      resultDiv.innerHTML = 'esse navegador não suporta o incrivel programa da heloisa.';
    }