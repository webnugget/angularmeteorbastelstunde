import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone, OnInit } from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Tracker} from 'meteor/tracker';
import {Mongo} from "meteor/mongo";
import {MeteorComponent} from 'angular2-meteor';

@Component({
	selector: 'app',
	templateUrl: 'client/app.html'
})
class Socially extends MeteorComponent implements OnInit  {
	parties: Mongo.Cursor<any>;
	
	constructor () {
		super();
		console.log(Parties);
		
	}

	ngOnInit(){

		this.autorun(() => {
			console.log('autorun');
			this.subscribe('parties', () => {
				this.parties = Parties.find({});
				console.log('joschi');
			}, true);
		}, true);
	 	// console.log(this.parties.fetch());	
		// this.parties=this.collection.fetch().values();
		// console.log(this.collection.fetch().
	}


}

bootstrap(Socially);