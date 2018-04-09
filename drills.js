'use strict';

const HashMap = require('./hashmap');
const { palindrome } = require('./supplemental');

function main() {
  //   let lor = new HashMap();
  //   lor.set('Hobbit', 'Bilbo');
  //   lor.set('Hobbit', 'Frodo');
  //   lor.set('Wizard', 'Gandolf');
  //   lor.set('Human', 'Aragon');
  //   lor.set('Elf', 'Legolas');
  //   lor.set('Maiar', 'The Necromancer');
  //   lor.set('Maiar', 'Sauron');
  //   lor.set('RingBeaerer', 'Gollum');
  //   lor.set('LadyOfLight', 'Galadriel');
  //   lor.set('HalfElven', 'Arwen');
  //   lor.set('Ent', 'Treebeard');
  console.log(palindrome('racecar'));
}

main();
