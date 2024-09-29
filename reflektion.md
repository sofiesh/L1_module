# Reflektion

## Kapitel 2 - meningsfulla namn
| Namn och förklaring     | Reflektion och regler från Clean Code     |
| ------------ | ------------ |
| calculateSavingsPerMonth(userName, savingsGoal,
currentSavings, monthsToReachGoal)
Funktion för att returnera objekt med parametrar 
som kan användas för månadsbudgetering.   | Innehåll 2   |
| Innehåll 4   | Innehåll 5   |


## Kapitel 3 - Funktioner
...

### Reflektion kring kapitel 3
* Large functions: I det här fallet tycker jag att det gick ganska bra att hålla nere antalet kodrader. Jag har ingen funktion med fler än 20 rader. Däremot upplever jag detta svårare att hålla sig till när man sedan implementerar moduler eller bibliotek i applikationer. Då kan det vara lockande att lägga in en loop direkt istället för att skapa en ytterligare funktion/modul vid sidan av åtminstonne till en början. Jag brukar sedan arbeta för att separera ut det som går när jag "renskriver" koden. För mig handlar detta om att jag ofta skriver pseudokod och sedan lägger in de olika byggstenarna direkt. Det är för mig ett viktigt förbättringsområde som jag är ganska medveten om.



## Övrigt
* Parametrar så som userName behövde ej inkluderas i funktionerna i detta steg. Det är tänkt som stöd för att identifiera användare i en applikation. Med hänvisning till "Avoid Mental Mapping och Keep Functions Small and Focused" bör parametrar endast användas i de fall de är nödvändiga för funktionens syfte.

* När det gäller 'Net Present Value' så skulle man kunna argumentera för att det kan förkortas NPV i funktionsnamnen för att förkorta dem. När NPV är parameter eller konstant/variabel tycker jag att valet hade varit mer självklart. Just för funktioner så skall dessa användas utanför biblioteket där de förklaras och därför anser jag att det är rimligt att ha kvar det i fullängd framför att använda förkortningen.

* namn på sub-moduler mer generella för att sedan göra om dem till klasser. I mitt fall valde jag att inte göra om till klasser då jag inte hade den tiden. Ett mer generellt namn på sub-modul kompletteras sedan med mer specifika metod-namn.

* går att vända och vrida mycket på benämningar, tänker att det kan vara olika hur man skall gå tillväga beroende på i vilket sammanhang man arbetar. Tex skapar jag något i ett väletablerat system så behöver man delvis anpassa sig till existerande arbetssätt med namngivningar även om förbättringsförslag självklart skall lyftas. I detta gäller det att värdera omfattning, komplexitet och uppskattad fördel av att ändra en etablerad standard.

* det är väldigt viktigt att värdera tydlighet och samtidigt vara tillräckligt kortfattad i README för att skapa ett bra startläge för den/de utvecklare som skall använda sig av koden i framtiden. Här anser jag också att det är viktigt att inte blanda in annan info för att det skall gå förhållandevis snabbt och smidigt att läsa igenom den.

* Viktigt att dela upp sin dokumentation, tex information om testdata i fil som hålls separat.