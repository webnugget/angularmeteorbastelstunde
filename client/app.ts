import 'reflect-metadata';
import 'zone.js/dist/zone';
// import {Party} from './party';
import {Component,NgZone, OnInit } from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Tracker} from 'meteor/tracker';
// import {Mongo} from 'meteor/mongo';



@Component({
	selector: 'app',
	templateUrl: 'client/app.html'
})
class Socially implements OnInit {
	parties;
	// parties: Array<Object>;
	// private parties: Party[]=[new Party('megaparty','megalocation','hammer')];

	// constructor (private zone: NgZone) {
	// 	this.zone=zone;
	    
	// }
	constructor(){
		this.parties = Parties.find().fetch();
		console.log(this.parties);
		setTimeout(() => { 
			console.log(this.parties);
		}, 4000);
	}

	ngOnInit(){
		// Tracker.autorun(() => this.zone.run(() => {
		// 	this.parties = Parties.find().fetch();
		// }));
	}


}




bootstrap(Socially);