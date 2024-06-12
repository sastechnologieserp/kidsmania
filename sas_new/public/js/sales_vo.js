frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
        //
	}
});


// frappe.ui.form.on('Sales Invoice Item', {
//     refresh(frm){
//         frm.trigger('item_code');
//     },
//     item_code(frm, cdt, cdn) {
//       let co = locals[cdt][cdn];
//       co.last_buy_price = 0;
//       co.sqty = 0;
//       if (frm.doc.items && frm.doc.customer) {
//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.last_price",
//                 args: {
//                     "customer": frm.doc.customer,
//                 },
//                 callback: function (r) {
//                     let rmsg = r.message;
//                     if (rmsg) {
//                         Object.entries(rmsg).forEach(([itk, itv]) => {
//                             if (co.item_code == itk) {
//                                 co.last_buy_price = itv;
//                             }
//                         });
//                     }
//                 }
//             });

//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.stock_qty_1",
//                 args: {
//                     "item_code": co.item_code,
//                 },
//                 callback: function (r) {
//                     let sqty = r.message;
//                     if (sqty) {
//                         co.sqty = sqty;
//                     }
//                 }
//             });

//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.last_buying",
//                 args: {
//                     "item_code": co.item_code,
//                 },
//                 callback: function (r) {
//                     let sqty = r.message;
//                     if (sqty) {
//                         co.buying_price_list = sqty;
//                     }
//                 }
//             });
//         }
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_item_details',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a popup/modal
//                 if (r.message) {
//                     frappe.msgprint(`<img src="${r.message.item_image}" alt="Item Image">`);
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
        
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_item_details',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').remove();

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 80%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     $(modal_content).modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
        
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').remove();

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals after a delay
//                     setTimeout(function() {
//                         $('.item-modal').remove();
//                     }, 500);

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').modal('hide').on('hidden.bs.modal', function () {
//                         $(this).remove(); // Remove the modal from the DOM when closed
//                     });

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'sas_new.sas_erp.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').modal('hide');

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

frappe.ui.form.on('Sales Invoice', {
    refresh: function(frm) {
        frm.fields_dict['items'].grid.get_field('item_code').get_query = function(doc, cdt, cdn) {
            return {
                filters: {
                    
                }
            };
        };
    }
});

frappe.ui.form.on('Sales Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.custom_script.sales_invoice.update_item_image',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    frm.set_value('custom_item_image', r.message);
                    frm.refresh_field('custom_item_image');
                } else {
                    frm.set_value('custom_item_image', '');
                    frm.refresh_field('custom_item_image');
                }
            }
        });
    }
});

// frappe.ui.form.on('Sales Invoice', {
//     refresh: function(frm) {
//         frm.fields_dict['custom_item_image'].$input.on('change', function() {
//             // Get the value of the custom_item_image field
//             var imageValue = frm.doc.custom_item_image;

//             // Set the value of the custom_image_view field
//             frm.doc.custom_image_view = imageValue;

//             // Refresh the field to display the updated value
//             frm.refresh_field('custom_image_view');
//         });
//     }
// });

frappe.ui.form.on('Sales Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.custom_script.sales_invoice.price_list',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    if (!frm.doc.custom_price_list) {
                        frm.add_child('custom_price_list', {});
                    }

                    var last_row = frm.doc.custom_price_list[frm.doc.custom_price_list.length - 1];

                    frappe.model.set_value(last_row.doctype, last_row.name, 'price_1', r.message.selling_price_1);
                    frappe.model.set_value(last_row.doctype, last_row.name, 'price_2', r.message.selling_price_2);
                    frappe.model.set_value(last_row.doctype, last_row.name, 'price_3', r.message.selling_price_3);
                    frappe.model.set_value(last_row.doctype, last_row.name, 'price_4', r.message.selling_price_4);
                    // frappe.model.set_value(last_row.doctype, last_row.name, 'price_5', r.message.selling_price_5);

                    frm.refresh_field('custom_price_list');
                }
            }
        });
    }
});


/////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE////////////////////////////////////

frappe.ui.form.on('Sales Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.custom_script.sales_invoice.avail_qty',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    if (!frm.doc.custom_warehouse_qty) {
                        frm.add_child('custom_warehouse_qty', {});
                    }

                    var last_row = frm.doc.custom_warehouse_qty[frm.doc.custom_warehouse_qty.length - 1];

                    frappe.model.set_value(last_row.doctype, last_row.name, 'warehouse1', r.message.warehouse_1);
                    frappe.model.set_value(last_row.doctype, last_row.name, 'warehouse2', r.message.warehouse_2);
                    frappe.model.set_value(last_row.doctype, last_row.name, 'custom_warehouse3', r.message.warehouse_3);

                    frm.refresh_field('custom_warehouse_qty');
                }
            }
        });
    }
});

/////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE////////////////////////////////////


frappe.ui.form.on('Sales Invoice', {
    onload: function(frm) {
        if (frm.doc.__islocal) { 
            frappe.prompt([
                {
                    label: __('Cost Center'),
                    fieldname: 'cost_center',
                    fieldtype: 'Link',
                    // default: 'Main - KM',
                    options: 'Cost Center',
                    reqd: 1,
                    get_query: function(doc, cdt, cdn) {
                        return {
                            filters: {is_group: 0}
                        };
                    }
                },
                {
                    label: __('Sales Team'),
                    fieldname: 'sales_team',
                    fieldtype: 'Table',
                    fields: [
                        {
                            label: __('Sales Person'),
                            fieldname: 'sales_person',
                            fieldtype: 'Link',
                            options: 'Sales Person',
                            reqd: 1,
                            in_list_view: 1
                        },
                        {
                            label: __('Contribution (%)'),
                            fieldname: 'allocated_percentage',
                            fieldtype: 'Float',
                            options: 'Sales Person',
                            in_list_view: 1
                        },
                        
                    ],
                    data: [] 
                }
            ], function(values) {
                frm.set_value('cost_center', values.cost_center);
                frm.set_value('sales_team', values.sales_team);
            }, __('Select'));
        }

        frm.fields_dict['items'].grid.get_field('item_code').get_query = function(doc, cdt, cdn) {
            var d = locals[cdt][cdn];
            return {
                filters: {
                    
                }
            };
        };

        frm.trigger('items_refresh');
    }
});

frappe.ui.form.on('Sales Invoice', {
    setup: function(frm) {
        var isPromptOpen = false;
        var allowedUsers = ['huzaifa@thekidsmania.com', 'kidsmaniakwt1@gmail.com', 'Administrator']

        frm.fields_dict['custom_profit_rate'].$wrapper.on('click', function() {
            if (!allowedUsers.includes(frappe.session.user)) {
                frappe.msgprint(__('You do not have permission to perform this action.'));
                return;
            }
            if (!isPromptOpen) {
                isPromptOpen = true; 

                var valuationData = [];
                var totalRate = 0;
                var totalValuationRate = 0;
                var totalMargin = 0;
                frm.doc.items.forEach(function(item) {
                    var margin = item.amount - (item.custom_valuation_rate * item.qty);
                    var margin_percentage = ((margin / (item.custom_valuation_rate * item.qty)) * 100).toFixed(3);

                    totalRate += item.amount;
                    totalValuationRate += item.custom_valuation_rate * item.qty;
                    totalMargin += margin;

                    valuationData.push({
                        item_code: item.item_code,
                        rate: item.amount,
                        valuation_rate: item.custom_valuation_rate * item.qty,
                        margin: margin,
                        margin_percentage: margin_percentage
                    });
                });

                var totalRow = {
                    item_code: '<b>Total</b>',
                    rate: totalRate.toFixed(3),
                    valuation_rate: totalValuationRate.toFixed(3),
                    margin: totalMargin.toFixed(3),
                    margin_percentage: ((totalMargin / totalValuationRate) * 100).toFixed(3)
                };
                valuationData.push(totalRow);

                var promptDialog = frappe.prompt([
                    {
                        label: __('Margin Table'),
                        fieldname: 'custom_valuation_table',
                        fieldtype: 'Table',
                        read_only: 1,
                        fields: [
                            {
                                label: __('CODE'),
                                fieldname: 'item_code',
                                fieldtype: 'Data',
                                in_list_view: 1,
                                read_only: 1
                            },
                            {
                                label: __('TOTAL PRICE'),
                                fieldname: 'rate',
                                fieldtype: 'Float',
                                in_list_view: 1,
                                read_only: 1
                            },
                            {
                                label: __('VALUATION RATE'),
                                fieldname: 'valuation_rate',
                                fieldtype: 'Float',
                                in_list_view: 1,
                                read_only: 1
                            },
                            {
                                label: __('MARGIN'),
                                fieldname: 'margin',
                                fieldtype: 'Float',
                                in_list_view: 1,
                                read_only: 1
                            },
                            {
                                label: __('MARGIN %'),
                                fieldname: 'margin_percentage',
                                fieldtype: 'Percent',
                                in_list_view: 1,
                                read_only: 1
                            },
                        ],
                        data: valuationData
                    }
                ], function(values) {
                    isPromptOpen = false;
                }, __('Margin'));

                promptDialog.onhide = function() {
                    isPromptOpen = false;
                };
            }

            frm.fields_dict['items'].grid.get_field('item_code').get_query = function(doc, cdt, cdn) {
            };

            frm.trigger('items_refresh');
        });
    }
});

frappe.ui.form.on('Sales Invoice Item', {
    item_code: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        // Make an asynchronous call to the server to get the valuation_rate
        frappe.call({
            method: 'sas_new.sas_erp.doctype.item_prices.item_prices.valuation_rate',  // Replace with your actual method path
            args: {
                item_code: item_code
            },
            callback: function (r) {
                if (r.message) {
                    // Update the custom_valuation_rate field with the fetched valuation_rate
                    frappe.model.set_value(cdt, cdn, 'custom_valuation_rate', r.message);
                    frm.refresh_field('items');
                }
            }
        });
    }
});


// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         frappe.call({
//             method: 'sas_new.sas_erp.custom_script.sales_invoice.get_valuation_rate',
//             args: {
//                 item_code: child.item_code,
//                 warehouse: child.warehouse
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     frappe.model.set_value(cdt, cdn, 'custom_valuation_rate', r.message);
//                     frm.refresh_field('items');
//                 }
//             }
//         });
//     }
// });

frappe.ui.form.on('Sales Invoice Item', {
    validate: function (frm, cdt, cdn) {
        // Get the current row
        var row = locals[cdt][cdn];

        // Check if the Enter key is pressed
        $(row.child_table).keydown(function (e) {
            if (e.which == 13) {
                // Prevent the default Enter key behavior
                e.preventDefault();

                // Trigger the Tab key press to move to the next column
                var currentInput = $(e.target);
                var nextInput = currentInput.closest('td').next().find(':input');
                nextInput.focus();
            }
        });
    }
});
