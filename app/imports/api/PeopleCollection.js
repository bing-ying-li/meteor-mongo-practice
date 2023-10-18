import { Mongo } from 'meteor/mongo';

export const PeopleCollection = new Mongo.Collection('People');
PeopleCollection.insert({ first: 'Doris', last: 'Johnson', age: 93, city: 'Naples' });