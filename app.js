const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const dotenv = require('dotenv').config();

client.on('ready', async () => {
    const channel = await client.channels.fetch('918264604730228796');
    const URL = 'https://api.coingecko.com/api/v3/coins/smooth-love-potion'
    const headers = {
        method: 'GET'
    }  
    let status = true

    console.log(`
        - Bot: ${client.user.tag} 
        - Status: ${status} (Working)`)
        
    let mainInterval = setInterval(() => {
        fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion', headers)
        .then(response => response.json())
        .then(data => {             
            let SLP = data.market_data.current_price.usd
            let formula2Dec = parseInt(SLP * 100, 10) / 100
            let mainValue = 0.01

            if(formula2Dec == mainValue + 0.02){ //! 0.03

                //TODO: PISO
                channel.send(`Piso 0.03, valor actual: ${SLP}`) 
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.03){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.04){
                                channel.send(`Subida a 0.04, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.04){
                            channel.send(`Subida a 0.04!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.035){
                                    channel.send('Piso 0.035')
                                }
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.055){
                                    channel.send('Piso 0.055')
                                }
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }
            
            if(formula2Dec == mainValue + 0.03){ //! 0.04

                //TODO: PISO
                channel.send(`Piso 0.04, valor actual: ${SLP}`)
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.04){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.04){
                                channel.send(`Subida a 0.04, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.05){
                            channel.send(`Subida a 0.05!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.045){
                                    channel.send('Piso 0.045')
                                }
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.065){
                                    channel.send('Piso 0.065')
                                }
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.04){ //! 0.05

                channel.send(`Piso 0.05, valor actual: ${SLP}`)
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.05){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.05){
                                channel.send(`Subida a 0.05, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.06){
                            channel.send(`Subida a 0.06!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.055){
                                    channel.send('Piso 0.055')
                                }
                            }
                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.075){
                                    channel.send('Piso 0.075')
                                }
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.05){ //! 0.06

                channel.send(`Piso 0.06, valor actual: ${SLP}`)
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.06){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.06){
                                channel.send(`Subida a 0.06, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.07){
                            channel.send(`Subida a 0.07!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.065){
                                    channel.send('Piso 0.065')
                                }
                            }
                            if(formula2Dec == 0.08){
                                channel.send('Piso 0.08')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.085){
                                    channel.send('Piso 0.085')
                                }
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.06){ //! 0.07

                //TODO: PISO
                channel.send(`Piso 0.07, valor actual: ${SLP}`)
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.07){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.07){
                                channel.send(`Subida a 0.07, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.08){
                            channel.send(`Subida a 0.08!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.075){
                                    channel.send('Piso 0.075')
                                }
                            }
                            if(formula2Dec == 0.09){
                                channel.send('Piso 0.09')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.095){
                                    channel.send('Piso 0.985')
                                }
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.07){ //! 0.08

                channel.send(`Piso 0.08, valor actual: ${SLP}`)
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.08){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.08){
                                channel.send('Piso 0.08')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.08){
                                channel.send(`Subida a 0.08, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.09){
                            channel.send(`Subida a 0.09!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)

                            if(formula2Dec == 0.08){
                                channel.send('Piso 0.08')
                                clearInterval(subIntervalo_3)
                                if(formula3Dec == 0.085){
                                    channel.send('Piso 0.085')
                                }
                            }
                            if(formula2Dec == 0.1){
                                channel.send('Piso 0.1')
                                clearInterval(subIntervalo_3)
                            }

                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.08){ //! 0.09

                channel.send(`Piso 0.09, valor actual: ${SLP}`) 
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.09){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.08){
                                channel.send('Piso 0.08')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.09){
                                channel.send('Piso 0.09')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.09){
                                channel.send(`Subida a 0.09, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.1){
                            channel.send(`Subida a 0.1!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }

            if(formula2Dec == mainValue + 0.09){ //! 0.1

                channel.send(`Piso 0.1, valor actual: ${SLP}`) 
                        
                //! Caida o Subida
                let subIntervalo_2 = setInterval( () => {
                    fetch(URL, headers)
                    .then(response => response.json())
                    .then(data => { 
                        let SLP = data.market_data.current_price.usd
                        let formula2Dec = parseInt(SLP * 100, 10) / 100
                        let formula3Dec = parseInt(SLP * 1000, 10) / 1000

                        if(formula2Dec < 0.1){
                            channel.send(`DESPLOME!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                            
                            if(formula2Dec == 0.00){
                                channel.send('Piso 0.00!!!')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.01){
                                channel.send('Piso 0.01')
                                clearInterval(subIntervalo_3)
                            } 
                            if(formula2Dec == 0.02){
                                channel.send('Piso 0.02')
                                clearInterval(subIntervalo_3)
                            }   
                            if(formula2Dec == 0.03){
                                channel.send('Piso 0.03')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.04){
                                channel.send('Piso 0.04')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.05){
                                channel.send('Piso 0.05')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.06){
                                channel.send('Piso 0.06')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.07){
                                channel.send('Piso 0.07')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.08){
                                channel.send('Piso 0.08')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.09){
                                channel.send('Piso 0.09')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec == 0.1){
                                channel.send('Piso 0.09')
                                clearInterval(subIntervalo_3)
                            }
                            if(formula2Dec > 0.1){
                                channel.send(`Subida a 0.1, valor actual ${SLP}`)
                            }

                        } 

                        if(formula2Dec >= 0.11){
                            channel.send(`Subida a 0.11!, valor actual: ${formula3Dec}`)
                            clearInterval(subIntervalo_2)
                        }
                    }) 
                    .catch( () => channel.send('Error Bot #subIntervalo_2'))
                }, 188400) 
            
            }
        })
    }, 942000)
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
            message.reply('SLP: ' + data.market_data.current_price.usd)
        });
    }

    console.log(`Message from ${message.author.username}: ${message.content}`)

})

client.login(process.env.BOT_TOKEN)
