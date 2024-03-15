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


// frappe.ui.form.on('Item', {
//     refresh: function(frm) {
//         // Add a custom button to fetch prices
//         frm.add_custom_button(__('Fetch Prices'), function() {
//             // Call a function to fetch prices for the current item
//             fetchItemPrices(frm);
//         });
//     }
// });

// function fetchItemPrices(frm) {
//     // Get the current item code
//     var item_code = frm.doc.item_code;

//     // Fetch prices for the item
//     fetchPrices(item_code);
// }

// function fetchPrices(item_code) {
//     // Define the specific price lists
//     var price_lists = ['Retail Price', 'Wholesale Price Unit', 'Wholesale Price DZN', 'Special Price'];

//     // Fetch prices from server
//     frappe.call({
//         method: 'sas_new.sas_erp.custom_script.items.fetch_item_prices',
//         args: {
//             'item_code': item_code,
//             'price_lists': price_lists
//         },
//         callback: function(response) {
//             if (response.message) {
//                 // Show prices in a popup
//                 showPricesPopup(response.message);
//             } else {
//                 frappe.msgprint(__('No prices found for the selected item.'));
//             }
//         }
//     });
// }

frappe.ui.form.on('Item', {
    refresh: function (frm) {
        // Add a custom button to the form
        frm.add_custom_button(__('Price and QTY'), function () {
            // Call a function when the button is clicked
            customFetchData(frm);
        });
    }
});

function customFetchData(frm) {
    // Get the value of the item_code field
    var itemCode = frm.doc.item_code;

    // Check if the item_code is not empty
    if (itemCode) {
        // Create a new row in the custom_prices_and_qty child table
        var newRow = frappe.model.add_child(frm.doc, 'Item Prices and QTY', 'custom_prices_and_qty');
        
        // Set the item_code field in the new row
        newRow.item_code = itemCode;

        // Fetch additional data for the new row
        fetchItemName(itemCode, newRow);
        fetchItemPrices(itemCode, frm, 'Item Prices and QTY', newRow.name);

        // Refresh the form to reflect the changes
        frm.refresh_field('custom_prices_and_qty');
    } else {
        frappe.msgprint(__('Please save the Item before fetching data.'));
    }
}




frappe.ui.form.on('Item Prices and QTY', {
    refresh(frm, cdt, cdn) {
        frm.trigger('item_code');
    },
    item_code(frm, cdt, cdn) {
        const child = locals[cdt][cdn];
        if (frm.doc.custom_prices_and_qty) {
            const fetchPrice = (field, method) => {
                frappe.call({
                    method: `sas_new.sas_erp.doctype.item_prices.item_prices.${method}`,
                    args: { item_code: child.item_code },
                    callback: function (r) {
                        const price = r.message;
                        if (price) {
                            child[field] = price;
                            frm.refresh_field('custom_prices_and_qty');
                        }
                    }
                });
            };

            fetchPrice('qty', 'stock_bal');
            fetchPrice('selling_price_1', 'selling_price_1');
            fetchPrice('selling_price_2', 'selling_price_2');
            fetchPrice('selling_price_3', 'selling_price_3');
            fetchPrice('selling_price_4', 'selling_price_4');
        }
    }
});

function fetchItemCodes(purchase_invoice, frm, cdt, cdn) {
    frappe.call({
        method: 'sas_new.sas_erp.custom_script.sales_invoice.fetch_item_codes',
        args: {
            purchase_invoice: purchase_invoice
        },
        callback: function(r) {
            if (r.message) {
                console.log('Fetched Item Codes:', r.message);  // Log fetched data to the console

                frm.fields_dict['custom_prices_and_qty'].grid.remove_all();
                $.each(r.message, function(i, item) {
                    const row = frappe.model.add_child(frm.doc, 'Item Prices and QTY', 'custom_prices_and_qty');
                    row.item_code = item.item_code;
                    fetchItemName(item.item_code, row); // Fetch and set item_name
                    fetchItemPrices(item.item_code, frm, 'Item Prices and QTY', row.name);
                });
                frm.refresh_field('custom_prices_and_qty');
            }
        }
    });
}

function fetchItemName(item_code, row) {
    frappe.call({
        method: 'sas_new.sas_erp.doctype.item_prices.item_prices.item_name',
        args: {
            item_code: item_code
        },
        callback: function(r) {
            if (r.message) { 
                row.item_name = r.message;
                frm.refresh_field('custom_prices_and_qty');
            }
        }
    });
}

function fetchItemPrices(item_code, frm, cdt, cdn) {
    const child = locals[cdt][cdn];
    const fetchPrice = (field, method) => {
        frappe.call({
            method: `sas_new.sas_erp.doctype.item_prices.item_prices.${method}`,
            args: { item_code: item_code },
            callback: function (r) {
                const price = r.message;
                if (price) {
                    child[field] = price;
                    frm.refresh_field('custom_prices_and_qty');
                }
            }
        });
    };

    fetchPrice('qty', 'stock_bal');
    fetchPrice('selling_price_1', 'selling_price_1');
    fetchPrice('selling_price_2', 'selling_price_2');
    fetchPrice('selling_price_3', 'selling_price_3');
    fetchPrice('selling_price_4', 'selling_price_4');
}