# Description

This package defines a generic class BetterObject that allows for safer subclassing. In particular:

- it provides a simple method `defaults` for setting default values of all properties at object creation,

- and a method `mutabilities` that defined permissions for changing the properties' values and defaults on or after object creation or when subclassing.

