// resolvers.js
import Event from '../Model/event.js';

export const resolvers = {
  Query: {
    getEvents: async () => {
      try {
        let events = await Event.find({});
        let eventsData = events.map((item) => {
          let currentEventData = item._doc;
          return { ...currentEventData };
        });
        return eventsData;
      } catch (err) {
        console.log("err:", err);
        throw err; // Throw the error to handle it properly
      }
    },
  },

  Mutation: {
    createEvent: async (_, { eventInput }) => {
      let newEvent = new Event({
        title: eventInput.title,
        description: eventInput.description,
        price: eventInput.price,
        date: new Date(eventInput.date),
      });

      try {
        const result = await newEvent.save();
        console.log('New event created!', result);
        return result; // Make sure to return the created event in the resolver
      } catch (err) {
        console.log("err while saving new event:", err);
        throw err; // Throw the error to handle it properly
      }
    },
  },
};
