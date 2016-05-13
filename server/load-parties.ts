import { PartyCollection } from '../collections/PartyCollection';
import { Party } from '../models/Party';

export function loadParties() {
  if (PartyCollection.find().count() === 0) {

    let parties:[Party];

    parties.push(new Party(
      'Dubstep-Free Zone',
      'Can we please just for an evening not listen to dubstep.',
      'Palo Alto'
    ));

    parties.push(new Party(
      'All dubstep all the time',
      'Get it on!',
      'Palo Alto'
    ));

    parties.push(new Party(
      'Savage lounging',
      'Leisure suit required. And only fiercest manners.',
      'San Francisco'
    ));

    for (var i = 0; i < parties.length; i++) {
      PartyCollection.insert(parties[i]);
    }
  }
};