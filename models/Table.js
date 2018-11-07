var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Table Model
 * =============
 */

var Table = new keystone.List('Table', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Table.add({
    name: { type: String, required: true, label: 'Nome' },
    status: { type: Types.Select, options: 'Aberta, Fechada', default: 'Fechada' },
});

Table.track = {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
};

Table.defaultColumns = 'name, status';

Table.register();
