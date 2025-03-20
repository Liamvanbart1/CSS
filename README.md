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
*Dit is een voorbeeld van de interface.*

![Eerste schets](./img/schets.jpg)  
*Eerste schets van het ontwerp, met een ruwe indeling van de interface.*

![Breakdown van interface](./img/breakdown.png)  
*Breakdown van de interface, waarin de verschillende componenten worden geanalyseerd.*



---

## **Week 2 - Progress**
### 📌 Voortgang
![Eerste layout](./img/eerstelayout.png)
*De eerste layout met css grid.*

### ✅ Wat ging goed?
- Eerste ervaring met **CSS Grid**, al was `grid-template` en `grid-area` even wennen.

### ❌ Wat ging minder goed?
- Flexbox geprobeerd, maar **Grid** bleek beter geschikt.

### 💡 Nieuwe inzichten
- **CSS Animaties**:
  ```css
  animation: 2s infinite linear paused;
  animation-play-state: running;

# **Week 3 - Progress** 🚀

Nesting, 

## 📌 Voortgang
Toon je vooruitgang met tekst, code en afbeeldingen.

![Screenshot van de voortgang](./img/progress-week3.png)

## ✅ Wat ging goed?
- Welke verbeteringen heb je gemaakt?
- Welke technieken of methoden werkten zoals verwacht?

## ❌ Wat was uitdagend?
- Waar liep je tegenaan?
- Hoe heb je problemen aangepakt?

## 🔬 Experimenten die ‘faalden’
- Wat heb je geprobeerd dat uiteindelijk niet werkte?
- Wat heb je hiervan geleerd?

## 💡 Nieuwe inzichten
- Heb je beter inzicht gekregen in CSS of andere technieken?
- Heb je wijzigingen doorgevoerd in je oorspronkelijke plan?

## 🚀 Uitdagingen voor volgende week
- Wat moet je nog afronden of verbeteren?

# **Week 4 - Completion** 🎉

### Eindresultaat

Het eindresultaat is een CSS-gebaseerde lay-out die gebruik maakt van container queries, custom properties (CSS-variabelen) en animaties om een interactieve en dynamische ervaring te creëren. Het doel was om een systeem te ontwerpen waarbij elementen (zoals planeten) op een gestileerde manier in een baan draaien, waarbij moderne CSS-technieken zoals container queries en custom media queries voor responsive design worden gebruikt.

#### Wat Ging Goed:
- **Flexbox Lay-outs:** Flexbox werkte zoals verwacht voor de algemene lay-out, waardoor het eenvoudig was om items in een container uit te lijnen.
- **CSS-Variabelen:** Het gebruik van CSS-variabelen voor kleuren, animatiesnelheden en maten maakte het mogelijk om snel aanpassingen te doen en de styling dynamischer te maken. Dit maakte het gemakkelijker om ontwerpparameters en responsiviteit aan te passen.
- **Basisanimaties:** De `@keyframes` voor het creëren van draaiende planeten met vloeiende overgangen werkten goed, waarbij de animatie werd geactiveerd en gepauzeerd op basis van interactie via de checkbox.

#### Wat Was Uitdagend:
- **Container Queries:** De grootste uitdaging was het werkend krijgen van de container queries (`@container`). Aanvankelijk overzag ik het feit dat de `container-type` eigenschap op het bovenliggende element ingesteld moest worden, wat ervoor zorgde dat de container queries niet getriggerd werden.
- **CSS-Variabelen in Animaties:** Het proberen om dynamische CSS-variabelen (zoals `--angle` voor rotatie) te gebruiken binnen animaties was lastig, omdat dit zorgde voor het correct bijwerken van de waarden tijdens de animatiecyclus.
- **Interactie tussen Viewport en Container Queries:** Ik had moeite om ervoor te zorgen dat de container queries correct reageerden op zowel de viewport als de grootte van de sectie zelf. Dit vereiste meerdere benaderingen om te testen hoe de bovenliggende elementen zich aanpassen en hoe deze veranderingen zich reflecteren op de onderliggende elementen.

#### Waar Ik Het Meest Trots Op Ben:
- **Vloeiende Interactiviteit:** De mogelijkheid om animaties te besturen op basis van gebruikersinvoer (de checkbox) is een functie waar ik trots op ben. Door animaties te pauzeren en te hervatten met alleen CSS, creëerde ik een interactieve ervaring zonder JavaScript.
- **Gebruik van Container Queries:** Het implementeren van container queries om de schaal van elementen aan te passen op basis van de breedte van de container was een spannende uitdaging en een belangrijke leerervaring.

#### Mislukte Experimenten:
- **Gradient Overgangen:** In eerste instantie probeerde ik een gradient (`light-dark`) te gebruiken voor het overgaan tussen lichte en donkere modus, maar ik stuitte op compatibiliteitsproblemen tussen browsers. De syntaxis werkte niet zoals verwacht, dus moest ik terugvallen op eenvoudigere `--eerste-kleur-zon` en `--tweede-kleur-zon` voor die overgangen.
- **Complexe Media Query Interacties:** Ik verkende manieren om lay-out eigenschappen aan te passen met behulp van zowel viewport-gebaseerde media queries als container queries samen. Ik kwam echter in de problemen met conflicterende gedragingen toen beide werden gecombineerd. Het werd duidelijk dat deze beter gescheiden moesten worden voor meer controle.

#### Nieuwe Inzichten in de Kracht van CSS:
- **Container Queries Zijn Krachtig:** De mogelijkheid om stijlen aan te passen op basis van de grootte van de bovenliggende container opent nieuwe mogelijkheden voor responsieve ontwerpen zonder alleen afhankelijk te zijn van de viewportgrootte. Dit maakt het ontwerp meer modulair en aanpasbaar.
- **CSS-Variabelen voor Dynamische Inhoud:** Het gebruik van CSS-variabelen voor herbruikbare stijlen (zoals snelheid, grootte, kleuren) bood veel flexibiliteit. Deze kunnen worden bijgewerkt door gebruikersinteracties of op basis van container queries, wat het ontwerp interactiever en beter onderhoudbaar maakt.

#### Wat Ik Verder Wil Verkennen:
- **Integratie van JavaScript en CSS:** Hoewel ik JavaScript vermijd voor de meeste interacties, zou het interessant zijn om te verkennen hoe JavaScript CSS-gebaseerde animaties en interacties kan versterken, vooral voor complexere scenario's.
- **Meer Geavanceerde CSS Animaties:** Ik wil dieper duiken in meer geavanceerde CSS-animatietechnieken, zoals keyframe-gebaseerde bewegingen en overgangen, om nog meer leven in de animaties te brengen.
- **Toegankelijkheid met CSS:** Zorgen voor toegankelijke interactieve elementen (zoals checkboxes en schuifregelaars) is een uitdaging die ik verder wil aanpakken, inclusief het verbeteren van navigatie via toetsenbord en ondersteuning voor schermlezers.



## Bronnenlijst
https://www.w3schools.com/css/css_grid.asp


### Code (Voorbeeld)
```css
@container (max-width: 300px) {
    section {
        --scale: 0.5; /* Schaal naar 0.5 wanneer de breedte van de sectie kleiner is dan 300px */
    }
}

@container (min-width: 300px) {
    section {
        --scale: 1; /* Zet terug naar 1 wanneer de breedte van de sectie 300px of groter is */
    }
}

section {
    transform: scale(var(--scale, 1)); /* Pas schaaltransformatie toe */
    transition: transform 0.3s ease-in-out;
}







