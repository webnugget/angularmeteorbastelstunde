import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone, OnInit } from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Tracker} from 'meteor/tracker';
import {Mongo} from "meteor/mongo";
import {MeteorComponent} from 'angular2-meteor';

@Component({
	selector: 'app',
	templateUrl: 'client/app.html'
})
<<<<<<< HEAD
class Socially implements OnInit {
	collection: Mongo.Cursor<Object>;
	parties;

=======
class Socially extends MeteorComponent implements OnInit  {
	parties: Mongo.Cursor<any>;
	
>>>>>>> 41ad4fd1d1123527a2adefb9416a50509976fba7
	constructor () {
		super();
		console.log(Parties);
		
	}

	ngOnInit(){

<<<<<<< HEAD
		this.parties=this.collection.fetch().values();
=======
		this.autorun(() => {
			console.log('autorun');
			this.subscribe('parties', () => {
				this.parties = Parties.find({});
				console.log('joschi');
			}, true);
		}, true);
	 	// console.log(this.parties.fetch());	
		// this.parties=this.collection.fetch().values();
>>>>>>> 41ad4fd1d1123527a2adefb9416a50509976fba7
		// console.log(this.collection.fetch().
	}


}

bootstrap(Socially);