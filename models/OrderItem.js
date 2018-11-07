var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * OrderItem Model
 * =============
 */

var OrderItem = new keystone.List('OrderItem', {
});

OrderItem.add({
    requestedDate: { type: Date, default: Date.now, required: true, label: 'Data do Pedido' },
    price: { type: Types.Money, format: '$0.0,00', required: true, initial: true, label: 'Preço' },
    quantity: { type: Types.Number, initial: true, required: true, label: 'Quantidade' },
    product: { type: Types.Relationship, ref: 'Product', required: true, initial: true, label: 'Produto' },
});

OrderItem.track = {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
};

OrderItem.schema.virtual('totalPrice').get(function () {
    return this.price * this.quantity;
});

OrderItem.register();
