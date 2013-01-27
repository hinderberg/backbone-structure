Presentasjonideer
===

PS! Ideer kan kun brukes individuelt dersom det er avklart med den som skrev ned ideen.

JS: Tips og triks
---

* Templates og testbarhet. Ikke god idé å legge templates i index.html, skaper mange problemer.
* Gjør så lite som mulig i konstruktøren. Det som new-es opp i konstruktøren er vanskelig å mocke i tester.
* Composition over inheritance. Arv er sterk kobling. Man bør dra inn ny funksjonalitet istedenfor å arve inn funksjonalitet.
* Singletons VS Constructor Injection
* Tester: mocking av ajax, testing av HTML-en
* Hvordan strukturere JavaScript (Små egenstående moduler)
* Deferred
* Objekt kommunikasjon
* Refaktorering, hvordan gjøre det effektivt i JavaScript?
* Testing og squire?
* Deferred, hvordan bestemme rekkefølge
* Serverside VS klientside validering

JS: Vanlige problemstillinger i en Backbone applikasjon - (presentasjon, bloggpost og workshop)
---

Etter å ha jobbet med flere større Backbone-baserte JavaScript-applikasjoner
har vi truffet på massevis av problemstillinger, gjort mye rart, og lært en god del. 
I denne presentasjonen prøver vi å destillere våre erfaringer ned til noen enkle punkter som det er
viktig å tenke på når du jobber med større JavaScript-applikasjoner basert på Backbone.

Presentasjonen tar utgangspunkt i Backbone, men flere av problemstillingene er like aktuelle i alle 
større JavaScript-applikasjoner. Vi kommer blant annet til å prate om minnehåndtering, vedlikeholdbarhet,
gjenbruk, plugins, og god bruk av modeller og views.

---

* Kompliserte url'er
* Hvorfor er collections og models vanskelig og hvordan kan vi bruke dem?
* Hvordan gjøre validering
* Hvordan ikke knytte seg for mye backbone? Mulig å bytte ut
* Bruk av base, gjenbrukbarhet
* Minnehåndtering
* Hva gjør ikke backbone for deg?
* _.bindAll MÅ ikke brukes hele tiden, når bør det brukes?
* scoping og jquery
* Er Backbone plugins i ferd med å bli det samme som jQuery plugins. For store! Håndtere for mange problemer samtidig?
* Hvordan overskrive backbone funksjonalitet?
* Hvordan gjøre det lett å oppgradere Backbone og andre avhengigheter
* Hvordan gjøre en Backbone app lett å videreutvikle, videreføre, lesbar, lett å bruke for andre utviklere. 
* Hvordan håndtere dobbelklikk, flere fetch kall mot en singleton?
* Hvordan håndtere applikasjonsstate (View-models)
* Lagring av data (mellom lagring) (Localstorage, Minne, Sessionstorage, Backend)


JS: Hvordan bruke et Hypermedia API i JS
---

JS: Kombinere flere kommunikasjonsmekanismer i en JS-app
---

* WebSocket
* REST

JS: Hva er WebSockets og Server-Sent Events?
---

* Intro til begge. Vise hvordan man kommer igang med for eksempel Socket.io, Now.js, Pusher, osv.
* Hvordan er det å dra inn i Java-verden?
* Hvilke problemer passer det godt å løse med disse teknologiene?
* Nettleserstøtte.


JS: Minnehåndtering i store javascript applikasjoner
---
* Variable refferanser
* Returverdier
* Closures
* Object Attributes and Methods
* Callbacks
* DOM events og events in general
* Hvordan gjøre rent etter seg selv?

JAVA: Hvordan lage et Hypermedia API med Jersey
---
