export interface StringUtil {
  camelCase(text: string): string;
  capitalize(text: string): string;
  firstLetters(text: string, numberOfLetters: number): string;
  kebabCase(text: string): string;
  lastLetters(text: string, numberOfLetters: number): string;
  lowerCase(text: string): string;
  snakeCase(text: string): string;
  titleCase(text: string): string;
  upperCase(text: string): string;
}
