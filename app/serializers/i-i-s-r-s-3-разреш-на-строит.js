import { Serializer as РазрешНаСтроитSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-s-3-разреш-на-строит';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РазрешНаСтроитSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
