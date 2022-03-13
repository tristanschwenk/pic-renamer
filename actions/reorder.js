import prompts from 'prompts';

export default {
    title: 'Re-Order Files',
    description: 'If you see that the files are not the proper way (1-10-2)',
    value: 'reorder',
    execute: async(ctx) => {
       ctx.orderFiles()
    }
};