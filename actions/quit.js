export default {
    title: 'Quit',
    description: 'Sad to see you leaving',
    value: 'quit',
    execute: async(ctx) => {
        process.exit(0)
    }
};