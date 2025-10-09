# Store Front

Store Front

Brugerens interaktioner (fx klik på produkt, køb, navigation)
Dataflow mellem API, visninger og indkøbskurv
Modulernes funktioner og kommunikation
Kode struktur
beskriv dine javascript moduler og din scss opsætning.

Eksempel på strukturer
JavaScript Modulstruktur
brug ES Modules for at holde koden overskuelig og genanvendelig:

1. api.js
   Håndterer alle API-kald til DummyJSON
   Funktioner:
   getProducts()
   getCategories()
   getProductById(id)
   searchProducts(query)
2. view.js
   Indeholder render-funktioner til DOM:
   renderProductCard(product)
   renderProductDetails(product)
   renderCart(cartItems)
   renderCategories(categories)
3. cart.js
   Håndterer indkøbskurv-logik:
   Tilføj/fjern produkter
   Beregn samlet pris
   Gem og hent fra localStorage
4. main.js
   Entry point for appen
   Initialiserer appen og loader data
   SCSS Struktur
   SCSS-filerne er opdelt i partials for bedre organisering:
