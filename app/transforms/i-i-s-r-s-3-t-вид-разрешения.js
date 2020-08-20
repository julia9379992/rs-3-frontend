import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tВидРазрешенияEnum from '../enums/i-i-s-r-s-3-t-вид-разрешения';

export default FlexberryEnum.extend({
  enum: tВидРазрешенияEnum,
  sourceType: 'IIS.RS_3.tВидРазрешения'
});
