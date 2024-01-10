frappe.ui.form.on('Item', {
    refresh: function(frm) {
        frm.add_custom_button(__('Check Item Price and Qty'), function() {
            // Fetch item prices from Price List
            frappe.call({
                method: 'your_app.your_module.get_item_prices',
                args: {
                    item_code: frm.doc.item_code
                },
                callback: function(r) {
                    if (r.message) {
                        // Display item prices in the console for now
                        console.log('Selling Price 1:', r.message.selling_price_1);
                        console.log('Selling Price 2:', r.message.selling_price_2);
                        console.log('Selling Price 3:', r.message.selling_price_3);
                    }
                }
            });

            // Fetch item quantity from Stock Ledger Entry
            frappe.call({
                method: 'your_app.your_module.get_item_quantity',
                args: {
                    item_code: frm.doc.item_code
                },
                callback: function(r) {
                    if (r.message) {
                        // Display item quantity in the console for now
                        console.log('Quantity:', r.message.quantity);
                    }
                }
            });
        });
    }
});
