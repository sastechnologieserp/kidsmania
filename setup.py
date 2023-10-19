from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in sas_new/__init__.py
from sas_new import __version__ as version

setup(
	name="sas_new",
	version=version,
	description="SASERP",
	author="rawas@sastechnologies.co",
	author_email="rawas@sastechnologies.co",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
