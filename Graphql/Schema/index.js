// Schema/index.js
import { typeDef as eventTypeDef } from './event.js';  // Corrected import statement
import { typeDef as userTypeDef } from './user.js';

export const rootTypeDef = [eventTypeDef, userTypeDef];