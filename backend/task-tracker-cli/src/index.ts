#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

import type { Command, Status } from '@/types';
import {
  addCommand,
  deleteCommand,
  helpCommand,
  listCommand,
  markDoneCommand,
  markInProgressCommand,
  updateCommand,
  versionCommand
} from '@/commands';
import { printError } from '@/utils/print';
import { initTaskFile } from '@/utils/taskStore';
import { requireArgs } from '@/utils/validate';

const packageJsonPath = path.join(import.meta.dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const args = process.argv.slice(2);
const command = args[0] as Command;
const commandArgs = args.slice(1);

if (command === '-h' || command === '--help') {
  helpCommand();
  process.exit(0);
}

if (command === '-v' || command === '--version') {
  versionCommand(packageJson.version);
  process.exit(0);
}

initTaskFile();

switch (command) {
  case 'add': {
    const [description] = commandArgs;
    requireArgs([description], 'Missing description. Use task-cli add <description>');

    addCommand(description);
    break;
  }

  case 'update': {
    const [id, description] = commandArgs;
    requireArgs([id, description], 'Missing id or description. Use task-cli update <id> <description>');

    updateCommand(Number(id), description);
    break;
  }

  case 'delete': {
    const [id] = commandArgs;
    requireArgs([id], 'Missing id. Use task-cli delete <id>');

    deleteCommand(Number(id));
    break;
  }

  case 'mark-in-progress': {
    const [id] = commandArgs;
    requireArgs([id], 'Missing id. Use task-cli mark-in-progress <id>');

    markInProgressCommand(Number(id));
    break;
  }

  case 'mark-done': {
    const [id] = commandArgs;
    requireArgs([id], 'Missing id. Use task-cli mark-done <id>');

    markDoneCommand(Number(id));
    break;
  }

  case 'list': {
    listCommand(commandArgs[0] as Status);
    break;
  }

  default:
    if (!command) {
      printError('No command provided.');
    } else {
      printError(`Unknown command: '${command}'`);
    }
    printError('Run "task-cli --help" for a list of available commands.');
    process.exit(1);
}
