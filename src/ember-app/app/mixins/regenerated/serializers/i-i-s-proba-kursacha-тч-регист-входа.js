import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      cотрудник: { serialize: 'odata-id', deserialize: 'records' },
      гость: { serialize: 'odata-id', deserialize: 'records' },
      должность: { serialize: 'odata-id', deserialize: 'records' },
      карты: { serialize: 'odata-id', deserialize: 'records' },
      формаРегисВх: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
