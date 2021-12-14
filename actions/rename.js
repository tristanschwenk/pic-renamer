export default {
    title: 'Rename',
    description: 'Launch the rename process',
    value: 'rename',
    execute: async(ctx) => {
        if (ctx.dir == "") {
            console.log("First, add a folder location.")
            return
        }
        ctx.renameFiles()
    }
};