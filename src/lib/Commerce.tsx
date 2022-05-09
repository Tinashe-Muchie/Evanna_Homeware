//instantiate commerce js by importing the commerce.js module
import Commerce from '@chec/commerce.js';

//create a commerce instance 
export const commerce = new Commerce('{process.env.REACT_APP_COMMERCE_PUBLIC_KEY}', true);
