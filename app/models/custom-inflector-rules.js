import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('организация', 'Организацияs');
inflector.irregular('строит', 'Строитs');
inflector.irregular('орг', 'Оргs');

export default {};
