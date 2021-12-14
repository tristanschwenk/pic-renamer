import prompts from 'prompts';
import actions from './actions/index.js';

import { Renamer } from './services/renamer.js';

(async() => {
    const renamer = new Renamer()

    while (true) {
        renamer.toString()
        const { choice } = await prompts([{
            type: 'select',
            name: 'choice',
            message: 'What we doing?',
            choices: actions,
            initial: 1,
        }], {
            onCancel: () => process.exit(0)
        });

        const action = actions.find(({ value }) => value == choice);

        if (!action) process.exit(1);

        await action.execute(renamer);
    }
})();