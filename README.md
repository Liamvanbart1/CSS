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

Deze week lag de focus op het verbeteren van de lay-out en het verder ontwikkelen van de responsiviteit. Ik heb erg veel nesting gebruikt tijdens het maken van de CSS door & te gebruiken. Dit zorgde ervoor dat ik verschillende styling kon gebruiken voor dezelfde elementen op andere plekken. In eerste instantie schreef ik de code gewoon met classes om te zien of dit werkte en dan ging ik vervolgens uitzoeken welke selectoren ik nodig had. Ik heb samen met een docent gekeken naar hoe ik de lay-out kon veranderen met grid op basis van de breedte van het scherm met een media query. Ik wilde dit graag animeren en dat is uiteindelijk ook gelukt. Ook ben ik begonnen met de animaties en hoe ik deze met de player verder kan laten gaan/pauzeren.

Wat heb ik geleerd? Hoe handig grid eigenlijk is. Flexbox is makkelijk als je een simpele lay-out wil hebben, maar wanneer het dynamisch moet zijn is grid toch wel echt handig.

# **Week 4 - Completion**

Het eindresultaat was helaas niet helemaal zoals ik had gewild. Ik ben net te laat begonnen met de custom properties voor de animaties, waardoor dit uiteindelijk ten koste ging van de styling van de rest van mijn pagina. Ik heb wel erg veel custom properties in combinatie met sinus en cosinus gebruikt om planeten en hun baan te animeren. Ik heb één standaard animatie gemaakt en één die de gebruiker kan aanpassen met sliders. Deze sliders bepalen de afstand, grootte en snelheid van de planeten. Ik heb dit neergezet met details en summary's, wat dus uiteindelijk niet heel mooi is gestyled. De animatie kan je verder afspelen door met een slider de animation-delay aan te passen.

### Herkansing

Voor de herkansing heb ik gekeken naar de feedback van Sanne. Ik heb de detail/summary's op een mooie manier gestyled via een tutorial die Sanne heeft gedeeld. Ik heb ook i.p.v. een x aantal spannetjes onder de playbar gebruikgemaakt van een gradient background om de balkjes weer te geven. Ook heb ik gebruikgemaakt van clamp om de grootte van de tekst in de UI aan te passen. Ook heb ik mijn titel wat spectaculairder gemaakt.

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
