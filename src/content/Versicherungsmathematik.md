

| **Kategorie**          | **Begriff**                       | **Kurze Erklärung**                                    | **Mathematik / Formel**                                                            |
| ---------------------- | --------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Finanz-/Barwert**    | Effektive Jahresverzinsung        | Periodische Verzinsung → Jahresäquivalent              | $$ (1+ i/m)^{m}-1 $$                                                               |
|                        | Barwert Zahlungsstrom             | Abzinsung auf Bewertungsstichtag                       | $$ V = \sum_{t=1}^{n} \frac{C_t}{(1+i)^t} $$                                       |
|                        | Ewige Rente                       | Barwert unendlicher Zahlungen                          | $$ V = \frac{C}{i} $$                                                              |
|                        | Duration (Macaulay)               | Gewichtete mittlere Fälligkeit                         | $$ D = \frac{1}{P}\sum_{t} t\,\frac{C_t}{(1+i)^t} $$                               |
| **Leben/Rente**        | Überlebens­wahrsch.               | Person $x$ überlebt $t$ Jahre                          | $$ {}_{t}p_x = e^{- \int_{0}^{t} \mu_{x+s}\,ds} $$                                 |
|                        | Nettoprämie Risiko-LV             | Reine Todesfallprämie                                  | $$P \;=\; \frac{S \, q_{x:n}}{a_{\overline{n}\mid}}<br>$$                      |
|                        | Nettoprämie Erlebens-LV           | Prämie für Kapital bei Ablauf                          | $$P \;=\; \frac{S \, {}_{n}p_{x} \, v^{n}}{a_{\overline{n}\mid}}<br>$$         |
|                        | Barwert Sofortrente               | Lebenslange Rente ab sofort                            | $$ a_x = \sum_{k=0}^{\infty} v^{k}\, {}_{k}p_x $$                                  |
|                        | Thiele-Differenzialgl.            | Dynamik der Rückstellung                               | $$ \dot V(t)=\delta(t)\,V(t)+P(t)-B(t) $$                                          |
|                        | Zillmerung                        | Abschlusskosten vorfinanzieren                         | $$ V^{\text{zill}} = V - Z(1 - v^{n}) $$                                           |
| **PKV**                | Prospektive Alterungsrückstellung | Barwert künftiger Leistungs- minus Beitragsüberschüsse | $$ V = \sum_{t=a}^{\infty} (E[L_t]-E[P_t])\,v^{t-a} $$                             |
|                        | Summenmethode (§9 KalkVO)         | Beitrag aus Barwertsummen                              | $$ P = \frac{\sum b_t}{\sum v^{t}} $$                                              |
|                        | Morbiditätsmodell                 | Krankheits­häufigkeit/-kosten                          | $$ q^{\text{morbid}}_{x+t} $$                                                      |
|                        | Techn. Rechnungszins              | Zinsobergrenze PKV (DE)                                | $$ i_{\text{tech}} \le 2.5\% $$                                                    |
| **Schaden/Unfall**     | Compound-Poisson                  | Gesamtschaden = Summe Einzelschäden                    | $$ S = \sum_{i=1}^{N} X_i,\; N \sim \text{Poisson}(\lambda) $$                     |
|                        | Erwartungswert $S$                | Mittlerer Gesamtschaden                                | $$ E[S] = \lambda\,E[X] $$                                                         |
|                        | Varianz $S$                       | Schwankungsrisiko                                      | $$ \operatorname{Var}[S] = \lambda\,\operatorname{Var}[X] + \lambda (E[X])^2 $$    |
|                        | Chain-Ladder-Faktor               | Abwicklungsmuster Reserven                             | $$ f_k = \frac{\sum_i C_{i,k+1}}{\sum_i C_{i,k}} $$                                |
|                        | Mack-Std.-Abw.                    | Reserveunsicherheit                                    | $$ \hat\sigma(I) = \sum_k \frac{C_{I,k}^2 (f_k-1)^2}{n_k} $$                       |
|                        | GLM-Tarifierung                   | Regressionsmodell Prämien                              | $$ \log E[S\!\mid\!X] = X\beta $$                                                  |
|                        | GPD (EVT)                         | Extremschäden                                          | $$ P(X>u+x\mid X>u) = (1+\xi x/\beta)^{-1/\xi} $$                                  |
| **Rückversicherung**   | Quota-Share Erwartung             | Cedierter Schadenanteil                                | $$ E[S_{\text{ceded}}] = q\,E[S] $$                                                |
|                        | Surplus-Quote                     | Exzedent je Risiko                                     | $$ s_i = \frac{\max(0, S_i - R)}{S_i} $$                                           |
|                        | XL-Prämie                         | Preis Schaden-Exzedent                                 | $$ P = (1+\theta)\,E[(X-d)^+] $$                                                   |
|                        | Stop-Loss-Prämie                  | Preis Jahresschutz                                     | $$ P = (1+\theta)\,E[(S-M)^+] $$                                                   |
| **Ruin/Risikotheorie** | Cramér-Lundberg                   | Kapitalprozess                                         | $$ U_t = u + ct - \sum_{i\le N_t} X_i $$                                           |
|                        | Ruinwahrscheinlichkeit            | Exponentialapproximation                               | $$ \psi(u) \approx e^{-R u} $$                                                     |
|                        | Panjer-Rekursion                  | Verteilung Schadensumme                                | $$ P_S(k) = \tfrac{1}{1-a p_0} \sum_{j=1}^{k} (a + \tfrac{b j}{k}) p_j P_S(k-j) $$ |
| **Solvency II/SST**    | SCR-Standardformel                | Aggregation Modul-SCR                                  | $$ SCR = \sqrt{ \sum_i \sum_j \rho_{ij}\,SCR_i\,SCR_j } $$                         |
|                        | Value at Risk 99,5 %              | Risikoquantil                                          | $$ \text{VaR}_{99.5} = \inf\{x \mid P(L \le x) \ge 0.995\} $$                      |
|                        | ORSA MC                           | Mehrjährige Simulation                                 | $$ \text{simuliere Pfade} $$                                                       |
| **Credibility**        | Bühlmann-Schätzer                 | Erfahrung vs. Kollektiv                                | $$ \hat\mu = Z\bar{X} + (1-Z)m,\; Z=\frac{n}{n+k} $$                               |
|                        | Parameter $k$                     | Portfolio-Heterogenität                                | $$ k = \frac{\operatorname{Var}(\Theta)}{E[\operatorname{Var}(X\mid\Theta)]} $$    |
| **Simulation/ML**      | Monte-Carlo                       | Szenarioanalyse                                        | $$ \hat\theta = \frac{1}{N} \sum_{i=1}^{N} f(X_i) $$                               |
|                        | LSMC                              | Optionen/Garantien                                     | $$ \hat{C}(t,X_t) = E[e^{-rΔt} C(t+Δt, X_{t+Δt})\mid X_t] $$                       |
|                        | Gradient Boosting                 | ML-Ensemble Tarife                                     | $$ \hat{y} = \sum_{m=1}^{M} \gamma_m h_m(x) $$                                     |
| **ALM/Kapital**        | Immunisierung                     | Duration-Match                                         | $$ D_A = D_L,\; C_A > C_L $$                                                       |
|                        | Hull-White                        | Ein-Faktor-Zinsmodell                                  | $$ dr_t = (\theta(t) - a r_t)\,dt + \sigma\,dW_t $$                                |
|                        | ESG                               | Szenario-Generator                                     | $$ \text{gekoppelte SDEs} $$                                                       |
| **Optionen/Garantien** | Black-Scholes                     | Preis europ. Option                                    | $$ V = S_0 N(d_1) - K e^{-rT} N(d_2) $$                                            |
|                        | Delta-Hedging                     | Dynamische Absicherung                                 | $$ \Delta = \partial V / \partial S $$                                             |
|                        | GMAB/GMDB                         | Garantie-Fondsprodukte                                 | $$ \text{Long-Put} + \text{Fondswert} $$                                           |
