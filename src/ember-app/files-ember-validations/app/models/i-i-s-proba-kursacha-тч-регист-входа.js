import {
  defineNamespace,
  defineProjections,
  Model as ТчРегистВходаMixin
} from '../mixins/regenerated/models/i-i-s-proba-kursacha-тч-регист-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчРегистВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
