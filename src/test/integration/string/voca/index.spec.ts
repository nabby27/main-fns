import { StringUtilVoca } from '../../../../app/string/impl/stringUtilVoca';
import { CamelCaseTest } from '../camelCase';
import { CapitalizeTest } from '../capitalize';
import { FirstLettersTest } from '../firstLetters';
import { KebabCaseTest } from '../kebabCase';
import { LastLettersTest } from '../lastLetters';
import { LowerCaseTest } from '../lowerCase';
import { SnakeCaseTest } from '../snakeCase';
import { TitleCaseTest } from '../titleCase';
import { UpperCaseTest } from '../upperCase';

const stringUtilVoca = new StringUtilVoca();

new CamelCaseTest(stringUtilVoca).runTest();
new CapitalizeTest(stringUtilVoca).runTest();
new FirstLettersTest(stringUtilVoca).runTest();
new KebabCaseTest(stringUtilVoca).runTest();
new LastLettersTest(stringUtilVoca).runTest();
new LowerCaseTest(stringUtilVoca).runTest();
new SnakeCaseTest(stringUtilVoca).runTest();
new TitleCaseTest(stringUtilVoca).runTest();
new UpperCaseTest(stringUtilVoca).runTest();
