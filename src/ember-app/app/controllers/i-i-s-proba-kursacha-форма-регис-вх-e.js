import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proba-kursacha-форма-регис-вх-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proba-kursacha-тч-регист-входа+cотрудник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'cотрудник',
            projection: 'CотрудникL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-proba-kursacha-тч-регист-входа+должность':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'должность',
            projection: 'ДолжностьL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-proba-kursacha-тч-регист-входа+карты':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодКарты',
            required: true,
            relationName: 'карты',
            projection: 'КартыL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-proba-kursacha-тч-регист-входа+гость':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'гость',
            projection: 'ГостьL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
