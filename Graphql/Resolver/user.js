// resolvers.js
import User from '../../Model/user.js';

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        let users = await User.find({});
        return users;
      } catch (err) {
        console.log("err:", err);
        throw err; // Throw the error to handle it properly
      }
    },
  },

  Mutation: {
    createUser: async (_, { userInput }) => {
      let newUser = new User({
        email: userInput.email,
        password: userInput.password
      });

      try {
        const result = await newUser.save();
        console.log('New user created!', result);
        return result; // Make sure to return the created event in the resolver
      } catch (err) {
        console.log("err while saving new user:", err);
        throw err; // Throw the error to handle it properly
      }
    },
  },
};

export {resolvers};
