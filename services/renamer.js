import fs from 'fs/promises'
export class Renamer {
    constructor() {
        this.dir = ""
        this.offset = 0
        this.files = []
    }

    async getFiles() {
        try {
            this.files = await fs.readdir(this.dir)    
        } catch (error) {
            console.log(error)
            return 
        }
        return this.files
    }

    async renameFiles() {
        try {
            this.files.forEach(async (file, index) => {
                const extension = file.slice(file.indexOf('.'))
                await fs.rename(`${this.dir}/${file}`, `${this.dir}/${this.offset + index}${extension}`)
            })
            console.log(`successfully renamed ${this.files.length} files`)
        } catch (error) {
            console.error(error)
        }
    }

    setDir(dir) {
        this.dir = dir
    }

    setOffset(offset) {
        this.offset = offset
    } 

    toString() {
        console.log("\nCurrent Context :")
        console.log(`Folder: ${this.dir}`)
        console.log(`Offset: ${this.offset}\n`)
    }
}