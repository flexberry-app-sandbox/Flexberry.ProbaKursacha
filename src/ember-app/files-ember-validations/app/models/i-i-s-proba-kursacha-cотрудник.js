import {
  defineNamespace,
  defineProjections,
  Model as CотрудникMixin
} from '../mixins/regenerated/models/i-i-s-proba-kursacha-cотрудник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CотрудникMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
