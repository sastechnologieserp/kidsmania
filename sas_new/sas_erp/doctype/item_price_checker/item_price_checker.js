// Copyright (c) 2024, rawas@sastechnologies.co and contributors
// For license information, please see license.txt

frappe.ui.form.on('Item Price Checker', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_price_checker.item_price_checker.update_item_image',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    var image_path = r.message;
                    frm.set_value('image_path', image_path);
                    frm.refresh_field('image_path');

                    if (image_path) {
                        // Set the source of the image
                        var imageHtml = '<img src="' + image_path + '" alt="Item Image">';
                        frm.fields_dict['custom_image_html'].wrapper.innerHTML = imageHtml;
                    } else {
                        // If no image path, clear the custom image HTML field
                        frm.fields_dict['custom_image_html'].wrapper.innerHTML = '';
                    }
                }
            }
        });
    }
});

frappe.ui.form.on('Item Price Checker', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_price_checker.item_price_checker.update_item_image',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    var image_path = r.message;

                    // Set the value of 'image_path' field
                    frm.set_value('image_path', image_path);
                    frm.refresh_field('image_path');

                    // Get the 'image' field element
                    var $imageField = frm.fields_dict['image'].$input;

                    // If 'image_path' is not empty, set the source of the image field
                    if (image_path) {
                        // Set the source of the 'image' field
                        $imageField.attr('src', image_path);
                        // Show the 'image' field
                        $imageField.show();
                    } else {
                        // If 'image_path' is empty, hide the 'image' field
                        $imageField.hide();
                    }
                }
            }
        });
    }
});


frappe.ui.form.on('Item Price Checker', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_price_checker.item_price_checker.price_list',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    if (!frm.doc.price_list || !frm.doc.price_list.length) {
                        // Add a row in the child table of 'price_list' if no rows exist
                        var new_row = frm.add_child('price_list', {});
                        frappe.model.set_value(new_row.doctype, new_row.name, 'price_1', r.message.selling_price_1);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'price_2', r.message.selling_price_2);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'price_3', r.message.selling_price_3);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'price_4', r.message.selling_price_4);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'valuation_rate', r.message.selling_price_5);
                    } else {
                        // Update the first row with fetched data
                        var first_row = frm.doc.price_list[0];
                        frappe.model.set_value(first_row.doctype, first_row.name, 'price_1', r.message.selling_price_1);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'price_2', r.message.selling_price_2);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'price_3', r.message.selling_price_3);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'price_4', r.message.selling_price_4);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'valuation_rate', r.message.selling_price_5);
                    }
                    frm.refresh_field('price_list');
                }
            }
        });
    }
});



/////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE////////////////////////////////////

frappe.ui.form.on('Item Price Checker', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_price_checker.item_price_checker.avail_qty',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    if (!frm.doc.warehouses || !frm.doc.warehouses.length) {
                        // Add a row in the child table of 'warehouses' if no rows exist
                        var new_row = frm.add_child('warehouses', {});
                        frappe.model.set_value(new_row.doctype, new_row.name, 'warehouse1', r.message.warehouse_1);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'warehouse2', r.message.warehouse_2);
                        frappe.model.set_value(new_row.doctype, new_row.name, 'custom_warehouse3', r.message.warehouse_3);
                    } else {
                        // Update the first row with fetched data
                        var first_row = frm.doc.warehouses[0];
                        frappe.model.set_value(first_row.doctype, first_row.name, 'warehouse1', r.message.warehouse_1);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'warehouse2', r.message.warehouse_2);
                        frappe.model.set_value(first_row.doctype, first_row.name, 'custom_warehouse3', r.message.warehouse_3);
                    }
                    frm.refresh_field('warehouses');
                }
            }
        });
    }
});


/////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE////////////////////////////////////

frappe.ui.form.on('Item Price Checker', {
    item_barcode: function(frm) {
        var item_barcode = frm.doc.item_barcode;

        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_price_checker.item_price_checker.item_barcode',
            args: {
                item_barcode: item_barcode
            },
            callback: function(r) {
                if (r.message) {
                    // Set the item code field with the fetched parent item code
                    frm.set_value('item_code', r.message);
                    frm.refresh_field('item_code');
                    // Clear the image path field
                    frm.set_value('image_path', '');
                    frm.refresh_field('image_path');
                    // Clear the image field
                    frm.fields_dict['image'].$wrapper.find('img').attr('src', '');
                } else {
                    // Clear the item code field if no parent item is found for the barcode
                    frm.set_value('item_code', '');
                    frm.refresh_field('item_code');
                    frappe.msgprint('No item found for the provided barcode.');
                }
            }
        });
    }
});

frappe.ui.form.on('Item Price Checker', 'onload', function(frm) {
    // Clear the image path field when the form is loaded
    frm.set_value('image_path', '');
    frm.refresh_field('image_path');
    // Clear the image field when the form is loaded
    frm.fields_dict['image'].$wrapper.find('img').attr('src', '');
});

frappe.ui.form.on('Item Price Checker', 'before_unload', function(frm) {
    // Clear the image path field when the form is unloaded
    frm.set_value('image_path', '');
    frm.refresh_field('image_path');
    // Clear the image field when the form is unloaded
    frm.fields_dict['image'].$wrapper.find('img').attr('src', '');
});
