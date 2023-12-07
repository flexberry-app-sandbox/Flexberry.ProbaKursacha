import { Serializer as CотрудникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-kursacha-cотрудник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CотрудникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
