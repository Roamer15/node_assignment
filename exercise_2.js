// import { readFile } from 'node:fs'

// const configFiles = ['config.defaults.json','config.env.json','config.local.json']

// function loadConfig(files, index = 0, configData = {}) {
//     if (index >= files.length) {
//         console.log('Final config:', configData)
//         return
//     }
//     readFile(files[index], (err, contents) => {
//         if (err) {
//             console.error(`Error loading ${files[index]}:`, err)

//         } else {
//             Object.assign(configData, JSON.parse(contents))
//             console.log(`Loaded ${files[index]}`)
//         }
        
//         loadConfig(files, index + 1, configData)
//     })
// }

// loadConfig(configFiles)

import { promises as fs } from 'node:fs'

const configFiles = ['config.defalts.json', 'config.env.json', 'config.local.json']

async function loadConfig(files, index = 0, configData = {}) {
    if (index >= files.length) {
        console.log('Final config:', configData)
        return
    }

    try {
        // Read the file and parse it
        const contents = await fs.readFile(files[index], 'utf8')
        Object.assign(configData, JSON.parse(contents))
        console.log(`Loaded ${files[index]}`)
    } catch (err) {
        console.error(`Error loading ${files[index]}:`, err.message)
        // If an error occurs (file not found, invalid JSON, etc.), move to the next file
    }

    // Continue to the next file, whether or not the current file was successfully read
    await loadConfig(files, index + 1, configData)
}

// Start loading configurations
loadConfig(configFiles)

