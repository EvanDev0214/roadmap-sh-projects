import { styleText } from 'node:util';

export const printSuccess = (message: string) => {
  console.log(styleText('green', message));
};

export const printError = (message: string) => {
  console.error(styleText('red', message));
};
