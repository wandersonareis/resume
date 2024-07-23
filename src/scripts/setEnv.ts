/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;


async function writeFileUsingFS(targetPath: string, environmentFileContent: string) {
  if (!environmentFileContent) console.error(`wrote variables to ${targetPath}`)
  await Bun.write(targetPath, environmentFileContent);
  /* writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  }); */
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//ts typescript file
const tsFileContent = `
type Environment = {
    production: boolean;
    API_URL: string;
}`

//empty environment files
const emptyEnvironmentFileContent = `
  // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy
  export const environment: Environment = {
    production: false,
    API_URL: ''
  };
`;

//creates the `type.d.ts` file if it does not exist
writeFileUsingFS('./src/environments/type.d.ts', tsFileContent);

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.ts', emptyEnvironmentFileContent);
writeFileUsingFS('./src/environments/environment.development.ts', emptyEnvironmentFileContent);


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.ts'
  : './src/environments/environment.development.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy
  export const environment: Environment = {
    production: ${isProduction},
    API_URL: '${process.env.API_URL}'
  };
`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file

/* tslint:enable */