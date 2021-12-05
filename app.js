const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

client.on('ready', async () => {
    console.log(`Bot ready as: ${client.user.tag}`)
    const channel = await client.channels.fetch('916739035601448964');
    
    let mainInterval = setInterval(() => {
        fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
        .then(response => response.json())
        .then(data => {                

            let SLP = data.market_data.current_price.usd
            let formula2Dec = parseInt(SLP * 100, 10) / 100
            let mainValue = 0.03

            if(formula2Dec == mainValue){
                channel.send(`Piso ${mainValue}, valor actual: ${SLP}`)
                clearInterval(mainInterval)

                let subIntervalo_1 = setInterval( () => {
                    fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
                    .then(response => response.json())
                    .then(data => { 

                        let SLP = data.market_data.current_price.usd
                        let img = data.image.small
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000
                        let formula4Dec = parseInt(SLP * 10000, 10) / 10000
                        console.log(formula4Dec)

                        if(formula3Dec == 0.038){
                            let SLP = data.market_data.current_price.usd
                            channel.send(`Piso 0.038, valor actual: ${SLP}`)
                            clearInterval(subIntervalo_1)

                            let subIntervalo_2 = setInterval( () => {
                                fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
                                .then(response => response.json())
                                .then(data => { 
                                    let SLP = data.market_data.current_price.usd
                                    let formula3Dec = parseInt(SLP * 1000, 10) / 1000
                                    let formula4Dec = parseInt(SLP * 10000, 10) / 10000
                                    console.log('Escuchando ' + formula3Dec)
                                    if(formula3Dec == 0.037){
                                        channel.send(`Piso 0.037, valor actual: ${SLP}`)
                                        clearInterval(subIntervalo_2)
                                    }
                                })
                            }, 10000)
                        }
                    })
                }, 10000)
            }
        })
    }, 10000)
})

client.on("messageCreate", (message) => {

    if(message.content === 'Hola'){
        message.reply(`Hola ${message.author.username}`)
    }

    if(message.content === 'Arg'){
        fetch('https://restcountries.com/v2/name/arg')
        .then(response => response.json())
        .then(data => {
            message.reply('Pais: ' + data[0].name)
        });
    }

    if(message.content === 'Slp'){
        fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
        .then(response => response.json())
        .then(data => {
            if(data.market_data.current_price.usd === 0.01){
                channel.send('SLP a 0.01')
            }
            if(data.market_data.current_price.usd === 0.02){
                channel.send('SLP a 0.02')
            }
            if(data.market_data.current_price.usd === 0.03){
                channel.send('SLP a 0.03')
            }
            if(data.market_data.current_price.usd === 0.04){
                channel.send('SLP a 0.04')
            }
            if(data.market_data.current_price.usd === 0.05){
                channel.send('SLP a 0.05')
            }
            if(data.market_data.current_price.usd === 0.06){
                channel.send('SLP a 0.06')
            }
            if(data.market_data.current_price.usd === 0.07){
                channel.send('SLP a 0.07')
            }
            if(data.market_data.current_price.usd === 0.08){
                channel.send('SLP a 0.08')
            }
            if(data.market_data.current_price.usd === 0.09){
                channel.send('SLP a 0.09')
            }
            if(data.market_data.current_price.usd === 0.1){
                channel.send('SLP a 0.1')
            }
            
            message.reply('SLP: ' + data.market_data.current_price.usd)
        });
    }

    console.log(`Message from ${message.author.username}: ${message.content}`)

})

client.login('OTE2NzM3OTY5MTk5NjYxMDY4.YaugxA.1XARKo1Zk1cywcDv7_DCSUuUth8')
