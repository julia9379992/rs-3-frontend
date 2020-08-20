import { Serializer as ОбъектСтроитSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-s-3-объект-строит';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбъектСтроитSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
