import frappe

# your_app/your_module/your_module/doctype/item/item.py

# your_app/your_module/your_module/doctype/item/item.py

@frappe.whitelist()
def fetch_item_prices(item_code, price_lists):
    prices = {}

    for price_list in price_lists:
        method_name = f'selling_price_{price_lists.index(price_list) + 1}'
        price = frappe.get_value('Item Price', {
            'item_code': item_code,
            'price_list': price_list
        }, 'price_list_rate')

        prices[price_list] = price or 0

    return prices






@frappe.whitelist()
def item_name(item_code):
    item = frappe.db.get_value('Item', {'item_code': item_code}, ['item_name'])
    return item.item_name if item else None

# @frappe.whitelist()
# def get_item_prices(item_code, warehouse):
#     # Placeholder function to fetch item prices
#     prices = frappe.get_all('Item Price', filters={'item_code': item_code, 'price_list': ['in', ['Retail Price', 'Wholesale Price Unit', 'Wholesale Price DZN', 'Special Price']]}, fields=['price_list', 'price_list_rate'])
#     return prices

@frappe.whitelist()
def get_stock_ledger_entries(item_code, warehouse):
    # Placeholder function to fetch stock ledger entries
    entries = frappe.get_all('Stock Ledger Entry', filters={'item_code': item_code, 'warehouse': warehouse}, fields=['posting_date', 'actual_qty'])
    return entries

@frappe.whitelist()
def price_list(item_code):
    results = {'selling_price_1': False, 'selling_price_2': False, 'selling_price_3': False, 'selling_price_4': False}

    item_price_1 = frappe.get_value('Item Price', {'item_code': item_code, 'price_list': 'Retail Price'}, 'price_list_rate')
    if item_price_1:
        results['selling_price_1'] = item_price_1

    item_price_2 = frappe.get_value('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price Unit'}, 'price_list_rate')
    if item_price_2:
        results['selling_price_2'] = item_price_2

    item_price_3 = frappe.get_value('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price DZN'}, 'price_list_rate')
    if item_price_3:
        results['selling_price_3'] = item_price_3

    item_price_4 = frappe.get_value('Item Price', {'item_code': item_code, 'price_list': 'Special Price'}, 'price_list_rate')
    if item_price_4:
        results['selling_price_4'] = item_price_4

    frappe.msgprint("Script executed successfully")
    return results
