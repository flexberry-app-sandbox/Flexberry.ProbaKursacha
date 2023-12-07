import {
  defineNamespace,
  defineProjections,
  Model as ФормаРегисВхMixin
} from '../mixins/regenerated/models/i-i-s-proba-kursacha-форма-регис-вх';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормаРегисВхMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
