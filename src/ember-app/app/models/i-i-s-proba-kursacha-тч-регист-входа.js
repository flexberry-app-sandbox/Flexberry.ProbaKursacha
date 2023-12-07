import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчРегистВходаMixin
} from '../mixins/regenerated/models/i-i-s-proba-kursacha-тч-регист-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчРегистВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
