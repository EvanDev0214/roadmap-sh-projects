import { printError } from '@/utils/print';

export function requireArgs(
  values: readonly (string | undefined)[],
  message: string
) {
  if (values.some(value => !value)) {
    printError(message);
    process.exit(1);
  }
}
