import frappe

def set_last_purchase_rate(doc, method=None):
    """
    Updates rate for each item in Purchase Invoice
    based only on the last purchase of the same item (ignores supplier).
    """
    for item in doc.items:
        item.rate = get_last_purchase_rate(item.item_code)


@frappe.whitelist()
def get_last_purchase_rate(item_code):
    """
    Fetch the last purchased rate for given item_code
    without considering supplier.
    """
    last_rate = frappe.db.sql("""
        SELECT pii.rate
        FROM `tabPurchase Invoice Item` pii
        JOIN `tabPurchase Invoice` pi ON pii.parent = pi.name
        WHERE pii.item_code = %s
          AND pi.docstatus = 1
        ORDER BY pi.posting_date DESC, pi.creation DESC
        LIMIT 1
    """, (item_code,), as_dict=True)

    return last_rate[0].rate if last_rate else 0
