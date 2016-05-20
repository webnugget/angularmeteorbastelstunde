import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, NgZone, OnInit } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { PartyCollection } from '../collections/PartyCollection';

import { Tracker } from 'meteor/tracker';
import { Mongo } from "meteor/mongo";
import { MeteorComponent } from 'angular2-meteor';
import { Party } from '../models/Party';

@Component({
	selector: 'app',
	templateUrl: 'client/app.html'
})
class Socially extends MeteorComponent implements OnInit  {
	parties: Mongo.Cursor<Party>;

	constructor () {
		super();
	}

	ngOnInit(){
		console.log('init Socially');
			this.subscribe('parties', () => {
				this.parties = PartyCollection.find({});
			}, true);

	}

	addParty(){
		PartyCollection.insert(new Party('name','location','description'));
	}

	removeParty(party) {
		PartyCollection.remove(party._id);
	}

	saveParty(party) {
		PartyCollection.update(party._id, party)
	}


}

bootstrap(Socially);