#!/usr/bin/env node

import fs from 'fs';
import {join} from 'path';


const JSON_SPACING = 4;


export const main = (process)=> {
  const remarkConfig = {
    plugins: ['remark-preset-lint-recommended']
  };

  fs.writeFileSync(
    join(process.cwd(), '../../..', '.remarkrc'),
    JSON.stringify(remarkConfig, null, JSON_SPACING)
  );
};


/* istanbul ignore if */
if (require.main === module) {
  main(process);
}
