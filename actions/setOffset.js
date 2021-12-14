import prompts from 'prompts';

export default {
    title: 'Set Offset',
    description: 'Already know index to start?',
    value: 'setOffset',
    execute: async(ctx) => {
        const response = await prompts({
            type: 'text',
            name: 'offset',
            message: 'Enter index to start with:'
          });
        
          ctx.setOffset(response.offset);
    }
};