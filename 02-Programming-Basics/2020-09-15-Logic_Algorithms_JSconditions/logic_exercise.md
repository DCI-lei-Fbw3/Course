# Exercise

Write pseudocode to create a logic for :

* How much would you charge to wash all the windows in Leipzig? *

You have 30 mins, and a maximum of 10 steps.

## Taimur's Solution

* Inputs 

Number of people in LEI: 560,472
Average number of windows in a residential room: 2
Average number of rooms in a residitial space: 3 (didn't account the kitchen)
Average residential windows: 6

Total number of residential buildings in LEI: 339 094 (https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Publikationen/Downloads-Wohnen/bestand-wohnungen-2050300187004.pdf?__blob=publicationFile)

Windows in public spaces (schools/work places, restaurants, libraries, public transportation): 10 /person

Number of cars in Leipzig: 202 327 (https://www.bild.de/regional/leipzig/leipzig-news/202-327-privat-pkw-so-viele-autos-wie-noch-nie-in-leipzig-70817280.bild.html)
Number of windows per car: 6

Labor cost per window: 10 euros/hour
Cost of equipment per window: 5 euros/window

Average time spent cleaning both sides of a window: 4 mins

* Logic

Step 1 --> Calculate cars per resident: 202327/560472 = 0.37 
Step 2 --> Number of car windows per resident: 0.37*6 = ~ 2.2
Step 3 --> Average residential windows: 2 * 3 = 6
Step 4 --> Total residential windows: 6 * 339 094 = ~~2 000 000
Step 5 --> Total cost per hour: 10 + 5 = 15 euros
Step 6 --> Total public windows: 560,472 * 10 = 5604720
Step 7 --> Total windows in LEIP: Step 4 + Step 6: 2000000 + 5604720 = ~~ 7.6 million
Step 8 --> Total cost: Step 7 * Step 5 = ~~ 114 million euros

* Output 

114 million euros