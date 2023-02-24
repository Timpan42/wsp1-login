# plan 

## Databas 
### Log
- Username (charat)
- Password (Varchar)
- id (int)

## Routes
- index
- log in 
- sign in 

## Knapp

### index
- log in 
- sign in 
- log ut
- profile 

## Sign in 
Compare get data with existing database data (bcrypt)
if username is taken 
- red field

else$
- add get data to database

## log in 
Compare get data with existing database data (bcrypt)
compare username and password in field (tableplus)

if wrong 
- dont sign in (red field)

else¤
- log in 

### password rules
- length 

## veka 6 fredag
Test 6-8 fungerar
Vi har lyckats hasha och implementerade hashen i databasen
Bcrypt initialized
Fixa compare nästa gång

## veka 7 tisdag
test 2 klart
session init
profile funkar bara om du har loggat in först
Nästa gång: Göra test 3 

## veka 7 fredag
test 3 klart
logout fungerar
sign in börjat
10/13 klar på test 4
Nästa gång: Se ifall namn i register clashar med namn i databasen. Stoppa in användaren i databasen. Logga in registrerad användare.

## veka 8 fredag
test 4 klart
register fungerar
delete user
sessions är i full fart
Nästa gång: Skapa test för delete user + andra funktioner kanske