import Component from '@ember/component';

export default class OldSchool extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  constructor() { super(...arguments); this.noSchool = 'No school'; }
  get theOldSchool() {
    return "the old school"
  }
  // normal class body definition here
}



