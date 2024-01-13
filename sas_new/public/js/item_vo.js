frappe.ui.form.on('Item', {
	refresh(frm) {
        //
	}
});

// frappe.ui.form.on('Item', {
//     onload: function(frm) {
//         frm.events.fetch_prices(frm);
//     },

//     refresh: function(frm) {
//         frm.events.fetch_prices(frm);
//     },

//     fetch_prices: function(frm) {
//         if (frm.doc.name) {
//             frappe.call({
//                 method: 'sas_new.sas_erp.custom_script.items.price_list',
//                 args: {
//                     item_code: frm.doc.name  // Using 'name' instead of 'item_code'
//                 },
//                 callback: function(r) {
//                     if (r.message) {
//                         // Clear existing rows
//                         frm.clear_table('custom_prices_and_qty');

//                         // Add a new row
//                         var new_row = frm.add_child('custom_prices_and_qty', {});
                        
//                         // Set values in the new row
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_1', r.message.selling_price_1);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_2', r.message.selling_price_2);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_3', r.message.selling_price_3);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_4', r.message.selling_price_4);

//                         frm.refresh_field('custom_prices_and_qty');
//                     }
//                 }
//             });
//         }
//     }
// });

// frappe.ui.form.on('Item', {
//     onload: function(frm) {
//         frm.events.fetch_prices(frm);
//     },

//     refresh: function(frm) {
//         frm.events.fetch_prices(frm);
//     },

//     custom_fetch_data: function(frm) {
//         frm.events.add_and_fetch_row(frm);
//     },

//     fetch_prices: function(frm) {
//         if (frm.doc.name) {
//             frappe.call({
//                 method: 'sas_new.sas_erp.custom_script.sales_invoice.price_list',
//                 args: {
//                     item_code: frm.doc.name
//                 },
//                 callback: function(r) {
//                     if (r.message) {
//                         // Clear existing rows
//                         frm.clear_table('custom_prices_and_qty');

//                         // Add a new row
//                         frm.events.add_row(frm);

//                         // Set values in the new row
//                         var new_row = frm.doc.custom_prices_and_qty[0];  // Assuming the newly added row is the first one
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_1', r.message.selling_price_1);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_2', r.message.selling_price_2);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_3', r.message.selling_price_3);
//                         frappe.model.set_value(new_row.doctype, new_row.name, 'price_4', r.message.selling_price_4);

//                         frm.refresh_field('custom_prices_and_qty');
//                     }
//                 }
//             });
//         }
//     },

//     add_row: function(frm) {
//         frm.add_child('custom_prices_and_qty', {});
//     },

//     add_and_fetch_row: function(frm) {
//         frm.events.add_row(frm);
//         frm.events.fetch_prices(frm);
//     }
// });


frappe.ui.form.on('Item', {
    refresh: function(frm) {
        // Add a custom button to fetch prices
        frm.add_custom_button(__('Fetch Prices'), function() {
            // Call a function to fetch prices for the current item
            fetchItemPrices(frm);
        });
    }
});

function fetchItemPrices(frm) {
    // Get the current item code
    var item_code = frm.doc.item_code;

    // Fetch prices for the item
    fetchPrices(item_code);
}

function fetchPrices(item_code) {
    // Define the specific price lists
    var price_lists = ['Retail Price', 'Wholesale Price Unit', 'Wholesale Price DZN', 'Special Price'];

    // Fetch prices from server
    frappe.call({
        method: 'sas_new.sas_erp.custom_script.items.fetch_item_prices',
        args: {
            'item_code': item_code,
            'price_lists': price_lists
        },
        callback: function(response) {
            if (response.message) {
                // Show prices in a popup
                showPricesPopup(response.message);
            } else {
                frappe.msgprint(__('No prices found for the selected item.'));
            }
        }
    });
}

