# Login
Tim Fagerdal 
2023 - 03 - 05 

## Inledning
Detta arbete syfte är att kunna skapa en grund till ett login system som användes av en server, samt lära sig att arbete i grupp med webbutveckling. Arbetet gjordes i grupp där det kunde diskutera hur den planering vi använde skulle se ut och planera dem relevanta delar som skulle programmeras. Gruppen arbeta med Ubuntu, HTML, Tabellplus(server) och JS samt olika packages som ladas ner till Ubuntu med Npm för att skapa login systemet. 

## Bakgrund 
Arbete start började med att få instruktioner från våran lärare att skapa en planering utifrån ett CRUD perspektiv, med viss innehåll som står i mappen instruktioner, del 1 och 2. Inuti planeringen skulle det finnas databasens innehåll och vilken typ det är. Detta görs för att spara information som login system behöver för att funka. Vilka sidor/routes som kommer att användas/behövas för arbetet, ett hem sida, login och sign in. Samt up skrevs vad deras funktioner det har i projektet. Sedan forkades ett projekt gjort av läraren som arbetades i.

För att skapa systemet används JS för att göra routes, hämta  information, använda sig av den informationen och läsa in sidorna. Sidorna använder sig av NJK för att kuna enklare göra dem dynamiska och använda sig av informationen vi frå från JS. 

Hur login systemet funkar är att man kan skapa en användare genom att fylla ett formulär som skickar informationen till en databas och sparas där, användarnamnet är det samma dock bcryptas lösenordet, det krypterar lösenordet så man inte kan se det originala lösenordet i databasen. Sedan på en annan sidan kan man fylla in sitt användarnamn och lösenord för att loga in. När den kallelsen görs söker js koden igenom databasen med en Mysql fråga för att se om det finns ett användarnamn som är det samma som användaren ger i formuläret. Om det är sant så jämförs lösenordet som blir bcryptas med den i databasen för att få se om man blir in logad eller inte. Om man är in logad så kan man nå sin egna profil som ar information i den. Sessions används för att kontrollera om användaren är in logad. Man kan loga ut, då blir sessionen inte san och man kan inte nå sin profil och så kan man ta bort sin användare från databasen, då raderas informationen från databasen.   

## Positiva erfarenheter
Jag tycker denna typ av grupp arbete är ett bra sätt att lära sig dem tekniker som projektet använder, genom att gruppen behöver diskutera hur tekniken funkar så kan man lära sig av någon som förstå den eller lär man sig snabbare med att man behöver testa sig fram för att lösa testerna. Diskunionen gjorde att man behövde tänka mycket mer aktivt hur man behöver förklara hur man tänker runt testerna och hur man borde klara dem. Samt med att man hade olika ideer går det snabbare att lösa problemen med att om någons ide inte funkar så kan någon annans det. Det går också snabbare att hitta problem i koden med att fler personer kolla på den och man kunde påpeka kod delar som inte funka eller kunde förbättras med varande och lära sig att det kan finnas bättre sätt att lösa samma problem. Det var också trevliga att kuna prata om samma saker med varadra för att kuna komma vidare, det var ett roligare sätt att arbeta på än om man behövde göra det en och en.    


## Negativa erfarenheter
Detta arbete var ganska svårt från början och man hade många frågetecken på hur teknikerna funkade, hur man skulle använda JS för att skapa in loggningen och alla dess delar. Man hade känslan att man kunde bara komma vidare om man frågande läraren, att det borde finnas några hjälp länkar som förklara några av dem teknikerna vi använder. Samt fans det några tekniska problem som med terminalen som användes som var lite frustrerande.  

## Sammanfattning
 Detta var roligt att jobba i grupp som gjorde att man lärde sig mycket och man hade en trevlig tid under tiden. Änd om det var svårt ibland och man satt fast många gånger under projektet gång, så klarade vi av alla tester och har nu ett fungerande login system. För att kuna förbättra detta i framtiden så skulle det vara bra med några enkla exempel och förklaringar ner skriven eller länkar, för att gruppen kan lösa problemet tillsammans utan att behöva fråga läraren så ofta. Detta var ett roligt arbete med frå negativa sidor och många positiva.   


