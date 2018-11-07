var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Order Model
 * ==========
 */

var Order = new keystone.List('Order', {
    autokey: { path: 'slug', from: 'title', unique: true },
});

Order.add({
    openedDate: { type: Date, default: Date.now, required: true, label: 'Abertura da Conta' },
    closedDate: { type: Date, label: 'Fechamento da Conta' },
    status: { type: Types.Select, options: 'Aberta, Paga', default: 'Aberta', index: true, label: 'Status' },
    itens: { type: Types.Relationship, ref: 'OrderItem', many: true, label: 'Produtos' },
    table: { type: Types.Relationship, ref: 'Table', required: true, initial: true, label: 'Mesa' },
});

Order.schema.virtual('tip').get(function () {
    return this.total * 0.1;
});

Order.schema.virtual('total').get(function () {
    let value = 0;
    for (let index = 0; index < this.itens.length; index++) {
        const element = this.itens[index];
        value += element.totalPrice;
    }
    return value;
});

Order.track = {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
};

Order.defaultColumns = 'openedDate, status, table, total, closedDate';

Order.register();
