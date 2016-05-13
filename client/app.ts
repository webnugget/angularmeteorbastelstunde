import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone, OnInit } from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Tracker} from 'meteor/tracker';
import {Mongo} from "meteor/mongo";

@Component({
	selector: 'app',
	templateUrl: 'client/app.html'
})
class Socially implements OnInit {
	collection: Mongo.Cursor<Object>;
	parties;

	constructor () {
		this.collection=Parties.find({});
	}

	ngOnInit(){

		this.parties=this.collection.fetch().values();
		// console.log(this.collection.fetch().
	}


}

bootstrap(Socially);