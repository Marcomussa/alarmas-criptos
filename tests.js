if(formula3Dec == 0.039){
    channel.send(`Piso 0.039, valor actual: ${SLP}`)
    clearInterval(subIntervalo_1)

    let subIntervalo_2 = setInterval( () => {
        console.log('esuchando')
        if(formula2Dec == 0.04){
            channel.send(`Piso 0.04, valor actual: ${SLP}`)
            clearInterval(subIntervalo_2)
        } 
        if(formula3Dec == 0.038){
            channel.send(`Piso 0.038, valor actual: ${SLP}`)
            clearInterval(subIntervalo_2)
        } 
    }, 30000)
}

//! En Desarrollo
if(formula2Dec < mainValue){
    let SLP = data.market_data.current_price.usd
    clearInterval(subIntervalo_1)

    let subIntervalo_2 = setInterval( () => {
        fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
        .then(response => response.json())
        .then(data => { 
            let SLP = data.market_data.current_price.usd
            let formula2Dec = parseInt(SLP * 100, 10) / 100
            if(formula2Dec <= 0.03 && formula2Dec >= 0.02){
                if(formula2Dec == 0.03){
                    channel.send(`Piso 0.03`)
                }
                if(formula2Dec == 0.02){
                    channel.send(`Piso 0.02`)
                }
            }
            if(formula2Dec < 0.02 && formula2Dec >= 0.01){
                if(formula2Dec == 0.02){
                    channel.send(`Piso 0.02`)
                }
                if(formula2Dec == 0.01){
                    channel.send(`Piso 0.01`)
                }
            }
            if(formula2Dec < 0.01 && formula2Dec >= 0.00){
                if(formula2Dec == 0.01){
                    channel.send(`Piso 0.01`)
                }
                if(formula2Dec == 0.00){
                    channel.send(`Piso 0.00`)
                }
            }
        })
    }, 10000)
}

