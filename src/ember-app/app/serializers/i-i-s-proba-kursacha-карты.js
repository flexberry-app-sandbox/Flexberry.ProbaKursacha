import { Serializer as КартыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-kursacha-карты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КартыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
