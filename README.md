js-tips-and-tricks
==================

* Templates og testbarhet. Ikke god idé å legge templates i index.html, skaper mange problemer.
* Gjør så lite som mulig i konstruktøren. Det som new-es opp i konstruktøren er vanskelig å mocke i tester.
* Composition over inheritance. Arv er sterk kobling. Man bør dra inn ny funksjonalitet istedenfor å arve inn funksjonalitet.
* Singletons VS Constructor Injection
* Tester: mocking av ajax, testing av HTML-en
* Hvordan bruke et Hypermedia API i JS (Backbone)
