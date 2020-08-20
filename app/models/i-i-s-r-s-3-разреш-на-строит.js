import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as РазрешНаСтроитMixin
} from '../mixins/regenerated/models/i-i-s-r-s-3-разреш-на-строит';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, РазрешНаСтроитMixin, Validations, {
});

defineProjections(Model);

export default Model;
