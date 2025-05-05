# **Projectoverzicht**

## **Week 1 - Your Plan**

### 🎯 Doelstellingen

1. **Modular control panel**
2. **Online video editor**
3. **Technieken om te verkennen:**
   - Nesting
   - `:has()`
   - Container queries
   - Filters & Masks

### ❓ Uitdagingen

🚀 Interactieve elementen toevoegen zonder JavaScript.  
👨‍💻 Animatie starten en stoppen.

### 📸 Visuals

![Screenshot van voorbeeld](./img/Screenshot.png)  
_Dit is een voorbeeld van de interface._

![Eerste schets](./img/schets.jpg)  
_Eerste schets van het ontwerp, met een ruwe indeling van de interface._

![Breakdown van interface](./img/breakdown.png)  
_Breakdown van de interface, waarin de verschillende componenten worden geanalyseerd._

---

## **Week 2 - Progress**

### 📌 Voortgang

![Eerste layout](./img/eerstelayout.png)
_De eerste layout met css grid._

### ✅ Wat ging goed?

- Eerste ervaring met **CSS Grid**, al was `grid-template` en `grid-area` even wennen.

### ❌ Wat ging minder goed?

- Flexbox geprobeerd, maar **Grid** bleek beter geschikt.

### 💡 Nieuwe inzichten

- **CSS Animaties**:
  ```css
  animation: 2s infinite linear paused;
  animation-play-state: running;
  ```

# **Week 3 - Progress**

## 📌 Voortgang

Deze week lag de focus op het verbeteren van de lay-out en het verder ontwikkelen van de responsiviteit. Ik heb erg veel nesting gebruikt tijdens het maken van de css door & te gebruiken dit zorgde ervoor dat ik verschillende styling kon gebruiken voor dezelfde elementen op andere plekken. In eerste instantie schreef ik de code gewoon met classes om te zien of dit werkte en dan vervolgens ging ik uitzoeken welke selectoren ik nodig had. Ik heb samen met een docent gekeken naar hoe ik de layout kon veranderen grid op basis van de breedte van het scherm met een media query. Ik wilde dit graag animeren en dat is uiteindelijk ook gelukt. Ook ben ik begonnen met de animaties en hoe ik deze met de player verder kan laten gaan/pauzeren.

Wat heb ik geleerd? Hoe handig grid eigenlijk is. Flexbox is makkelijk als je een simpele layout wil hebben maar wanneer het dynamisch moet zijn is grid toch wel echt handig.

# **Week 4 - Completion**

Het eindresusltaat was helaas niet helemaal zoals ik had gewild. Ik ben net te laat begonnen met de custom properties voor de animaties waardoor dit uiteindelijk ten koste ging van de styling van de rest van mijn pagina.

### Eindresultaat

Het eindresultaat is een CSS-gebaseerde lay-out die gebruik maakt van container queries, custom properties (CSS-variabelen) en animaties om een interactieve en dynamische ervaring te creëren. Het doel was om een systeem te ontwerpen waarbij elementen (zoals planeten) op een gestileerde manier in een baan draaien, waarbij moderne CSS-technieken zoals container queries en custom media queries voor responsive design worden gebruikt.

## Bronnenlijst

https://www.w3schools.com/css/css_grid.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries?utm_source=chatgpt.com
https://webdesign.tutsplus.com/how-to-use-css-variables-for-animation--cms-28868t?utm_source=chatgpt.com
https://pixabay.com/nl/photos/aarde-planeet-de-ruimte-wereld-11009/ 
https://pixabay.com/nl/photos/mars-rode-planeet-planeet-de-ruimte-11012/
https://pixabay.com/nl/photos/venus-oppervlakte-heet-warmte-11022/
https://en.wikipedia.org/wiki/Mercury_(planet)
https://codepen.io/web-dot-dev/pen/VwoBQjY
https://pixabay.com/nl/photos/kosmos-milky-way-nacht-lucht-1853491/
https://codepen.io/web-dot-dev/pen/VwoBQjY
https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
