import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export var Parties = new Mongo.Collection<any>('parties');

if(Meteor.isServer){
	Meteor.publish('parties', function() {
		return Parties.find();
	});
}
