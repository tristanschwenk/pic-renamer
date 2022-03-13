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
        console.log(this.files) 
        return this.files
    }

    async renameFiles() {
        try {
            this.files.forEach(async (file, index) => {
                const extension = file.slice(file.indexOf('.'))
                try {
                    await fs.rename(`${this.dir}/${file}`, `${this.dir}/${parseInt(this.offset) + index}${extension}`)
                }
                catch(err) {
                    console.error(err);
                }
            })
            console.log(`successfully renamed ${this.files.length} files`)
        } catch (error) {
            console.error(error)
        }
    }

    orderFiles() {
        this.files = this.files.sort((a,b) => {
            console.log(a,b)
            return parseInt(a.split(".")[0]) - parseInt(b.split(".")[0])
        })
        console.log(this.files)
        return this.files

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