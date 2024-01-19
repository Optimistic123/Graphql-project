import { resolvers as eventResolver } from './event.js';
import { resolvers as userResolver } from './user.js';

export const rootResolvers = {...eventResolver, ...userResolver};
