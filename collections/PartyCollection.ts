import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Party } from '../models/Party';



export var PartyCollection = new Mongo.Collection<Party>('parties');

if(Meteor.isServer){
	Meteor.publish('parties', function() {
		return PartyCollection.find();
	});
}
