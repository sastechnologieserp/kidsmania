import frappe

@frappe.whitelist()
def item_name(item_code):
    item = frappe.db.get_value('Item', {'item_code': item_code}, ['item_name'])
    return item.item_name if item else None