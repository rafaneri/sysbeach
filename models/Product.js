var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var Product = new keystone.List('Product', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Product.add({
    name: { type: String, required: true, label: 'Nome' },
    price: { type: Types.Money, format: '$0.0,00', required: true, initial: true, label: 'Preço' },
    image: { type: Types.CloudinaryImage, label: 'Foto' },
    description: { type: String, label: 'Descrição' },
    category: { type: Types.Relationship, ref: 'Category', required: true, initial: true, label: 'Categoria' },
});

Product.track = {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
};

Product.defaultColumns = 'name, price, description, category';

Product.register();
