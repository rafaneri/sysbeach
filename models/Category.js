var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Category Model
 * =============
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Category.add({
	name: { type: String, required: true, label: 'Nome' }
});

Category.track = {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
};

Category.relationship({ ref: 'Product', path: 'products', refPath: 'category' });

Category.register();
