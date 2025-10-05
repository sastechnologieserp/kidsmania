from . import __version__ as app_version

app_name = "sas_new"
app_title = "SAS ERP"
app_publisher = "rawas@sastechnologies.co"
app_description = "SASERP"
app_email = "rawas@sastechnologies.co"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/sas_new/css/sas_new.css"
# app_include_js = "/assets/sas_new/js/sas_new.js"

# include js, css files in header of web template
# web_include_css = "/assets/sas_new/css/sas_new.css"
# web_include_js = "/assets/sas_new/js/sas_new.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "sas_new/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "sas_new.utils.jinja_methods",
#	"filters": "sas_new.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "sas_new.install.before_install"
# after_install = "sas_new.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "sas_new.uninstall.before_uninstall"
# after_uninstall = "sas_new.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "sas_new.utils.before_app_install"
# after_app_install = "sas_new.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "sas_new.utils.before_app_uninstall"
# after_app_uninstall = "sas_new.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "sas_new.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"sas_new.tasks.all"
#	],
#	"daily": [
#		"sas_new.tasks.daily"
#	],
#	"hourly": [
#		"sas_new.tasks.hourly"
#	],
#	"weekly": [
#		"sas_new.tasks.weekly"
#	],
#	"monthly": [
#		"sas_new.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "sas_new.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "sas_new.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "sas_new.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["sas_new.utils.before_request"]
# after_request = ["sas_new.utils.after_request"]

# Job Events
# ----------
# before_job = ["sas_new.utils.before_job"]
# after_job = ["sas_new.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"sas_new.auth.validate"
# ]

doctype_js = {
    "Sales Invoice": "public/js/sales_vo.js",
    "Delivery Note": "public/js/delivery_note.js",
    "Item": "public/js/item_vo.js",
	"Purchase Invoice": "public/js/purchase_invoice.js"
    }

fixtures=[
    {
    	"doctype": "DocType Layout",
        "filters": [
            [
                "name",
                "in",
                [ 
                    "Delivery Note",
                    "Purchase Order",
                    "Quotation",
                    "Purchase Invoice",
                    "Sales Invoice"
                 ]
            ]
        ]
    },
    {
    	"doctype": "Custom Field",
        "filters": [
            [
                "name",
                "in",
                [ 
                    "Sales Invoice-home",
                    "Sales Invoice-street",
                    "Sales Invoice-block",
                    "Purchase Invoice Item-stock_q",
                    "Delivery Note-street",
                    "Delivery Note-block",
                    "Delivery Note-home",
                    "Sales Invoice-custom_lpo_and_reference_no",
                    "Delivery Note-custom_lpo_and_reference_no",
                    "Delivery Note-lpo_and_reference_no",
                    "Sales Invoice-custom_image_view",
                    "Sales Invoice-custom_item_image",
                    "Delivery Note-custom_image_view",
                    "Delivery Note-custom_item_image"
                 ]
            ]
        ]
    },
    {
    	"doctype": "Property Setter",
        "filters": [
            [
                "name",
                "in",
                [ 
                    "Sales Invoice-set_posting_time-default"
                 ]
            ]
        ]
    }
]
