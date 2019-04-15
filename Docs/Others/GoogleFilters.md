# Google Filters

## site:

Limit the search query to a specific domain or web site. 	

```
site:example.com
```

## filetype:

Limit the search to text found in a specific file type 	

```
mysqldump filetype:sql
```

## link:

Search for pages that link to the requested URL 	

```
link:www.example.com
```

## cache:

Search and display a version of a web page as it was shown when Google crawled it. 	

```
cache:example.com
```

## intitle:

Search for a string text within the title of a page. 	

```
intitle:”index of”
```

## inurl:

Search for a string within a URL 	

```
inurl:passwords.txt
```

## AND or +

Used to include keywords. All the keywords need to be found. 	

```
web AND application AND security
web +application +security
```

## NOT or –

Used to exclude keywords. All the keywords need to be found. 	

```
web application NOT security
web application –security
```

## OR or |

Used to include keywords where either one keyword or another is matched. All the keywords need to be found. 	

```
web application OR security
web application |security
```

## Tilde (~)

Used to include synonyms and similar words. 	

```
web application ~security
```

## Double quote (“)

Used to include exact matches. 	

```
“web application security”
```

## Period (.)

Used to include single-character wildcards. 	

```
.eb application security
```

## Asterisk (*)

Used to include single-word wildcards. 	

```
web * security
```

## Parenthesis (())

Used to group queries 	

```
(“web security” | websecurity)
```
