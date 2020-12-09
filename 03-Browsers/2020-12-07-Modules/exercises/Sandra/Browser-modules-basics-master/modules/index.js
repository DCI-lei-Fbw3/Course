// - import {sumAll} from './math.js';  --> this is right
// - import {sumAll} from '../math.js';  --> this is right
// - import {sumAll} from 'https://someURL.com';  --> this is right

import {scrollWindow} from './scroll';
import {hoverHeader} from './hover';
import {clickImages} from './click';

scrollWindow();
hoverHeader();
clickImages();