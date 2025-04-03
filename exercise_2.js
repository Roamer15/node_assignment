import { readFile } from 'node:fs'

const configFiles = ['config.defaults.json','config.env.json','config.local.json']

function loadConfig(files, index = 0, configData = {}) {
    if (index >= files.length) {
        console.log('Final config:', configData)
        return
    }
    readFile(files[index], (err, contents) => {
        if (err) {
            console.error(`Error loading ${files[index]}:`, err)
            console.log(`${files[index]} was unsuccessfully loaded`)

        } else {
            Object.assign(configData, JSON.parse(contents))
            console.log(`${files[index]} was successfully loaded`)
        }
        
        loadConfig(files, index + 1, configData)
    })
}

loadConfig(configFiles)