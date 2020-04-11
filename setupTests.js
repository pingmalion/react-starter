import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

configure({ adapter: new Adapter() });

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();
