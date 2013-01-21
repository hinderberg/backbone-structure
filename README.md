Presentasjonsideer
==================

PS! Ideer kan kun brukes individuelt dersom det er avklart med den som skrev ned ideen.

JS: Tips og triks
-----------------

* Templates og testbarhet. Ikke god idé å legge templates i index.html, skaper mange problemer.
* Gjør så lite som mulig i konstruktøren. Det som new-es opp i konstruktøren er vanskelig å mocke i tester.
* Composition over inheritance. Arv er sterk kobling. Man bør dra inn ny funksjonalitet istedenfor å arve inn funksjonalitet.
* Singletons VS Constructor Injection
* Tester: mocking av ajax, testing av HTML-en
* Hvordan strukturere JavaScript (Små egenstående moduler)
* Deferred
* Objekt kommunikasjon
* Refaktorering, hvordan gjøre det effektivt i JavaScript?

JS: Lage en tullete backbone app og fiks den (backbone bare som eksempel) (Usual problems in a JavaScript MVC applications)
-----------------
* Kompliserte url'er
* Hvorfor er collections og models vanskelig og hvordan kan vi bruke dem?
* Hvordan gjøre validering
* Hvordan ikke knytte seg for mye backbone? Mulig å bytte ut
* Bruk av base, gjenbrukbarhet
* Minnehåndtering
* Hva gjør ikke backbone for deg?
* _.bindAll MÅ ikke brukes hele tiden
* scoping go query
* Få til diskusjon rundt dette
* Tenke på både presentasjon, bloggpost og workshop
* Testing og squire?
* Backbone plugins is the new jQuery plugin. THEY ARE HUUUUUGE! Frameworks?
* Ovverides of backbone functionality
* Ugreadebility of backbone, Maintaining the app
* 


Hvordan bruke et Hypermedia API i JS (Backbone)
----------------------------------------------

Kombinere flere kommunikasjonsmekanismer i en JS-app
----------------------------------------------------

(WebSocket, REST)

Hva er WebSockets og Server-Sent Events?
----------------------------------------

* Intro til begge. Vise hvordan man kommer igang med for eksempel Socket.io, Now.js, Pusher, osv.
* Hvordan er det å dra inn i Java-verden?
* Hvilke problemer passer det godt å løse med disse teknologiene?
* Nettleserstøtte.


Minnehåndtering i store javascript applikasjoner
----------------------------------------
* Variable refferanser
* Returverdier
* Closures
* Object Attributes and Methods
* Callbacks
* DOM events og events in general
* Hvordan gjøre rent etter seg selv?


Hvordan håndtere applikasjonsstate
----------------------------------------
* View-models


Hvordan lagre data
----------------------------------------
* Localstorage
* Sessionstorage
* Backend