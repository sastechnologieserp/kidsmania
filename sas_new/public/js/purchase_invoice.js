frappe.ui.form.on("Purchase Invoice Item", {
    item_code: function(frm, cdt, cdn) {
        const row = locals[cdt][cdn];
        setTimeout(() => {
            update_last_price_list_rate(row, cdt, cdn);
        }, 500);
    }
});

frappe.ui.form.on("Purchase Invoice", {
    items_add: function(frm, cdt, cdn) {
        const row = locals[cdt][cdn];
        setTimeout(() => {
            update_last_price_list_rate(row, cdt, cdn);
        }, 500);
    }
});

function update_last_price_list_rate(row, cdt, cdn) {
    if (!row.item_code) return;

    frappe.call({
        method: "sas_new.custom_script.purchase_invoice.get_last_purchase_rate",
        args: { item_code: row.item_code },
        callback: function(r) {
            if (r.message !== undefined) {
                frappe.model.set_value(cdt, cdn, "rate", r.message || 0);
            }
        }
    });
}
