import prompts from 'prompts';


export default {
    title: 'Set Location',
    description: 'Which folder are we looking?',
    value: 'setLocation',
    execute: async(ctx) => {
        const response = await prompts({
            type: 'text',
            name: 'location',
            message: 'Enter folder to search for:'
          });
        
          ctx.setDir(response.location);

          const files = await ctx.getFiles()
          console.log(`Successfully loaded ${files.length}files !`)
    }
};