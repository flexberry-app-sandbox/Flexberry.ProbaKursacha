import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as CотрудникMixin
} from '../mixins/regenerated/models/i-i-s-proba-kursacha-cотрудник';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CотрудникMixin, Validations, {
});

defineProjections(Model);

export default Model;
