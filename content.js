var substitutions = [
  "Bandersnatch Crumblebum",
  "Bandicoot Cumbercrash",
  "Bartemis Lumberjack",
  "Battleship Condornest", 
  "Battlefield Counterstrike",
  "Bayonet Cul-de-sac", 
  "Beautiful Plumberscrack", 
  "Bedminton Shplishnsplash",
  "Beedlebop Cootersnooch",
  "Benevolent Computerglitch",
  "Bembledump Melonpatch", 
  "Benadryl Cucumberpot", 
  "Benadryl Corncob",
  "Benderling Crumblewrench", 
  "Bendover Cumonback", 
  "Bendypole Cabbagepatch", 
  "Bendystraw Combopack", 
  "Benedict Bumberwatch", 
  "Benedryl Cabbagepatch",
  "Benefish Cumberface", 
  "Benefit Viktorsec", 
  "Beneful Thundercrunch", 
  "Benedettini Cabinetry",
  "Benelux Bandersnatch", 
  "BenneyBoop ComberBop",
  "Benny Cummerbund", 
  "Blueberry Pumpkin-Patch",
  "Bodydump Crumblesnack", 
  "Bonkyhort Cutiebrunch",
  "Bombadil Thundercats", 
  "Bowlingball Cuckooclock", 
  "Breadcrumbs Combatwrench", 
  "Brendadirk Cramplescrunch", 
  "Britishguy Sillyname",
  "Britishman Fancyname",
  "Buffalo Castardbath",
  "Buttduck Cataract",
  "Buildabear Bumbleswatch", 
  "Burntisland Cowdenbeath",
  "Burlington Coatfactory",
  "Bumblebee Baggage", 
  "Bumperbadge Cabbagepatch", 
  "Bumpercar Crumplezone",
  "Bumpercar Candysnatch", 
  "Bundersnatch Cabbagewank", 
  "Cadbury Pringle-Batch",
  "Camperdown Bramblepatch", 
  "Clumpity Bandersnatch", 
  "Mr. Strange",
  "Derelict Slumbersnatch", 
  "Eggs-Benedict Cucumber-Patch", 
  "Fiddledick Bandersnatch", 
  "Humperdinck Cummerbund", 
  "Renaissance Dumberhatch", 
  "Sherlockholmes Doctorstrange", 
  "Viaduct Plumberthatch", 
  "Wimbledon Tennismatch"
];

// TODO: Solution to more than 1 first/last name 
var firstNames = substitutions.map(x => x.split(" ")[0]);
var lastNames = substitutions.map(x => x.split(" ")[1]); 

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = nameMixer(text)

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function nameMixer(text) {
  if (randomInt(2)) {
    var name = firstNames[randomInt(firstNames.length)] + " " + (lastNames[randomInt(lastNames.length)]);
    return text.replace(/Benedict Cumberbatch|Cumberbatch/gi, name);
  }
  return text.replace(/Benedict Cumberbatch|Cumberbatch/gi, substitutions[randomInt(substitutions.length)]);
}

function randomInt(limit) {
  return Math.floor(Math.random() * limit);
}

