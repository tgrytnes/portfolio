| **Kategorie**            | **Begriff**                                      | **Kurze Erklärung**                                                                 | **Kenntnisstand**     |
|--------------------------|--------------------------------------------------|--------------------------------------------------------------------------------------|------------------------|
| Schadenhäufigkeit        | Binomial-Verteilung                              | Anzahl Schäden in einem festen Portfolio                                            | Teilweise (M343)       |
| Schadenhäufigkeit        | Poisson-Verteilung                               | Modell für zufällige, unabhängige Ereignisse in festen Intervallen                  | Ja (M343)              |
| Schadenhäufigkeit        | Negative Binomial-Verteilung                     | Erweiterung der Poissonverteilung bei Overdispersion                                | Nein                   |
| Schadenhäufigkeit        | Panjer-Klasse                                    | Klasse aggregierbarer Verteilungen wie Poisson, Binomial                            | Nein                   |
| Schadenshöhe             | Exponential-Verteilung                           | Modelliert Wartezeit bis zum Schaden                                                | Ja (M343)              |
| Schadenshöhe             | Gamma/Erlang-Verteilung                          | Summe mehrerer exponentieller Schäden                                               | Teilweise (M343)       |
| Schadenshöhe             | Pareto-Verteilung                                | Modelliert seltene, hohe Schäden (heavy tail)                                       | Nein                   |
| Aggregierte Verluste     | Panjer-Rekursion                                 | Algorithmus zur Berechnung aggregierter Verluste                                    | Nein                   |
| Aggregierte Verluste     | Compound-Poisson                                 | Gesamtschaden = Summe Einzelschäden bei Poisson-verteiltem N                        | Ja (M343)              |
| Aggregierte Verluste     | Erwartungswert E[S]                              | Mittlerer Gesamtschaden: E[S] = λ E[X]                                               | Ja (M343)              |
| Aggregierte Verluste     | Varianz Var[S]                                   | Schwankungsrisiko: Var[S] = λ Var[X] + λ(E[X])²                                      | Ja (M343)              |
| Reservierung             | Chain-Ladder-Faktor                              | Abwicklungsmuster zur Schätzung von Reserven                                        | Teilweise (M343)       |
| Reservierung             | Mack-Standardabweichung                          | Statistische Unsicherheit von Reserveschätzungen                                    | Teilweise (M343)       |
| Leben/Rente              | Überlebenswahrscheinlichkeit (t pₓ)              | Wahrscheinlichkeit, dass Person x t Jahre überlebt                                 | Ja (M343)              |
| Lebensversicherung       | Nettoprämie Risiko-LV                            | Prämie für Todesfallversicherung                                                    | Ja (M343)              |
| Lebensversicherung       | Nettoprämie Erlebens-LV                          | Prämie für Kapitalauszahlung bei Ablauf                                             | Ja (M343)              |
| Leben/Rente              | Barwert Sofortrente                              | Barwert lebenslanger Rentenzahlung ab sofort                                        | Ja (M343)              |
| Rückstellung             | Thiele-Differenzialgleichung                     | Kontinuierliche Rückstellungsberechnung mit Zins, Prämie, Leistung                 | Ja (M343)              |
| Rückstellung             | Zillmerung                                       | Vorfinanzierung von Abschlusskosten                                                 | Ja (M343)              |
| Finanzmathematik         | Effektive & periodische Verzinsung               | Effektiver Jahreszins aus unterjähriger Verzinsung                                  | Ja (MBA)               |
| Finanzmathematik         | Barwert Zahlungsstrom                            | Zeitwert von Zahlungsreihen                                                         | Ja (MBA)               |
| Finanzmathematik         | Ewige Rente                                      | Barwert unendlicher, konstanter Zahlungen                                           | Ja (MBA)               |
| Tarifierung              | GLM-Tarifierung                                  | Generalisierte lineare Modelle zur Prämienbestimmung                                | Teilweise (M343 – Poisson)       |
| Ruin/Risikotheorie       | Cramér-Lundberg                                  | Modell für Kapitalentwicklung mit Prämien, Schäden                                 | Teilweise (M343 – Poisson)       |
| Ruin/Risikotheorie       | Ruinwahrscheinlichkeit (Exponentialapprox.)      | Annäherung der Ruinwahrscheinlichkeit mit e^{-Ru}                                  | Teilweise (M343 – Poisson)       |
| Ruin/Risikotheorie       | Panjer-Rekursion                                 | Rekursive Berechnung der Schadensummenverteilung                                   | Teilweise (M343 – Poisson)       |
| Solvency II/SST          | SCR-Standardformel                               | Standardformel zur Aggregation von Modulrisiken über Korrelationsmatrix            | Teilweise (MBA – Risikomatrix)                  |
| Solvency II/SST          | Value at Risk 99,5 %                             | Quantilsbasiertes Risikomaß (0.5% Extremereignisse abgesichert)                    | Teilweise (MBA)        |
| Solvency II/SST          | ORSA MC                                          | Mehrjährige stochastische Pfadsimulation im internen Risikomodell                 | Nein                   |
| Credibility              | Bühlmann-Schätzer                                | Gewichtung zwischen individuellen und kollektiven Erwartungswerten                | Nein                   |
| Credibility              | Parameter k                                      | Verhältnis von Heterogenität zur Varianz innerhalb der Risiken                    | Nein                   |
| Simulation/ML            | Monte Carlo                                      | Näherung von Erwartungswerten durch Szenariosimulation                            | Teilweise (MBA)        |
| Simulation/ML            | LSMC                                             | Least Squares Monte Carlo zur Bewertung komplexer Optionen                        | Nein                   |
| Simulation/ML            | Gradient Boosting                                | Ensemble-Verfahren im maschinellen Lernen für Prämienmodellierung                 | Nein                   |
| ALM/Kapital              | Immunisierung                                    | Absicherung durch Gleichgewicht von Asset- und Liability-Duration                 | Teilweise (MBA)        |
| ALM/Kapital              | Hull-White                                       | Einfaktorielles stochastisches Zinsmodell mit Mittelwertrückkehr                  | Nein                   |
| ALM/Kapital              | ESG                                              | Szenario-Generator auf Basis gekoppelter stochastischer Differentialgleichungen    | Nein                   |
| Optionen/Garantien       | Black-Scholes                                    | Optionspreismodell für europäische Optionen mit stochastischem Underlying         | Teilweise (MBA)        |
| Optionen/Garantien       | Delta-Hedging                                    | Dynamische Absicherung durch kontinuierliches Anpassen des Portfolios             | Teilweise (MBA)        |
| Optionen/Garantien       | GMAB/GMDB                                        | Garantieprodukte mit Elementen von Long-Puts (Fonds + Garantie)                   | Nein                   |