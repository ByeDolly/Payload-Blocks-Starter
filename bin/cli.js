#!/usr/bin/env node
const prompts = require('prompts');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const { execa } = require('execa');

async function generateSecret(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

async function main() {
  console.log(chalk.bold('\n🧱 Welcome to Payload Blocks Starter!\n'));

  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'What is the name of your project?',
      validate: value => value.length > 0 ? true : 'Project name is required'
    },
    {
      type: 'select',
      name: 'databaseType',
      message: 'Which database would you like to use?',
      choices: [
        { title: 'MongoDB', value: 'mongodb' },
        { title: 'PostgreSQL', value: 'postgres' }
      ]
    },
    {
      type: 'text',
      name: 'databaseUrl',
      message: 'Enter your database URL:',
      validate: value => value.length > 0 ? true : 'Database URL is required'
    }
  ]);

  if (!response.projectName || !response.databaseType || !response.databaseUrl) {
    console.log(chalk.yellow('\nSetup cancelled.'));
    process.exit(0);
  }

  const spinner = ora('Creating your project...').start();

  try {
    const payloadSecret = await generateSecret();
    const projectPath = path.join(process.cwd(), response.projectName);

    // Copy current directory (excluding node_modules, .git, etc)
    await fs.mkdir(projectPath, { recursive: true });
    
    // Copy all files except those we want to exclude
    const files = await fs.readdir(process.cwd());
    for (const file of files) {
      if (!['.git', 'node_modules', 'bin', response.projectName].includes(file)) {
        await fs.cp(
          path.join(process.cwd(), file),
          path.join(projectPath, file),
          { recursive: true }
        );
      }
    }

    // Update package.json
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    packageJson.name = response.projectName;
    // Remove the bin field since it's not needed in the new project
    delete packageJson.bin;
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Create .env file
    const envContent = `
DATABASE_URI=${response.databaseUrl}
PAYLOAD_SECRET=${payloadSecret}
NEXT_PUBLIC_URL=http://localhost:3000
    `.trim();

    await fs.writeFile(path.join(projectPath, '.env'), envContent);

    // Update database configuration based on selected type
    if (response.databaseType === 'postgres') {
      spinner.text = 'Installing PostgreSQL dependencies...';
      await execa('npm', ['install', '@payloadcms/db-postgres@beta'], { cwd: projectPath });
      
      spinner.text = 'Configuring PostgreSQL...';
      const configPath = path.join(projectPath, 'src/payload.config.ts');
      let configContent = await fs.readFile(configPath, 'utf-8');
      configContent = configContent.replace(
        `import { mongooseAdapter } from '@payloadcms/db-mongodb'`,
        `import { postgresAdapter } from '@payloadcms/db-postgres'`
      );
      configContent = configContent.replace(
        'adapter: mongooseAdapter({',
        `adapter: postgresAdapter({
          pool: {
            connectionString: process.env.DATABASE_URI,
          },`
      );
      await fs.writeFile(configPath, configContent);
    }

    // Clean up - remove bin directory and script dependencies
    const dependenciesToRemove = ['prompts', 'chalk', 'ora', 'execa'];
    for (const dep of dependenciesToRemove) {
      delete packageJson.dependencies[dep];
    }
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

    spinner.succeed(chalk.green('Project created successfully!'));
    
    console.log('\nNext steps:');
    console.log(chalk.cyan(`1. cd ${response.projectName}`));
    console.log(chalk.cyan('2. pnpm install'));
    console.log(chalk.cyan('3. pnpm dev'));
    
  } catch (error) {
    spinner.fail(chalk.red('Failed to create project'));
    console.error(error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(chalk.red('\nUnexpected error:'), error);
  process.exit(1);
});