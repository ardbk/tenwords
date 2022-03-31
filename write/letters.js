var size = 0;

class Character {
  constructor(char, normal, bold, italic, bolditalic) {
    this.char = char;
    this.normal = normal;
    this.bold = bold;
    this.italic = italic;
    this.bolditalic = bolditalic;
  }
}

var letters = new Array;

function push(c, n, b, i, bi) {
    size++;
    letters[size-1] = new Character(c, n, b, i, bi);
}

function findCharacter(c){
    for(var i=0; i<size; i++){
        if(letters[i].char === c){
            return i;
        }
    }
    return -1;
}

function getCharacterWidth(c, type){
    var index = findCharacter(c);
    if (index == -1){
        return 2;
    }
    if (type == "normal"){
        return letters[index].normal;
    }
    if (type == "bold"){
        return letters[index].bold;
    }
    if (type == "italic"){
        return letters[index].italic;
    }
    if (type == "bolditalic"){
        return letters[index].bolditalic;
    }
}

function getWidth(c, type, fontSize){
    var l = c.length;
    var width = 0;

    for(var i=0; i<l; i++){
        width = width + getCharacterWidth(c.charAt(i), type);
    }
    return width*fontSize*25.4/72;
}



push(" ", 0.250, 0.250, 0.250, 0.250);
push("'", 0.180, 0.278, 0.214, 0.278);
push('!', 0.333, 0.333, 0.333, 0.389);
push('"', 0.408, 0.555, 0.420, 0.555);
push('#', 0.500, 0.500, 0.500, 0.500);
push('$', 0.500, 0.500, 0.500, 0.500);
push('%', 0.833, 1.000, 0.833, 0.833);
push('&', 0.778, 0.833, 0.778, 0.778);
push('(', 0.333, 0.333, 0.333, 0.333);
push(')', 0.333, 0.333, 0.333, 0.333);
push('*', 0.500, 0.500, 0.500, 0.500);
push('+', 0.564, 0.570, 0.675, 0.570);
push(',', 0.250, 0.250, 0.250, 0.250);
push('-', 0.333, 0.333, 0.333, 0.333);
push('.', 0.250, 0.250, 0.250, 0.250);
push('/', 0.278, 0.278, 0.278, 0.278);
push('0', 0.500, 0.500, 0.500, 0.500);
push('1', 0.500, 0.500, 0.500, 0.500);
push('2', 0.500, 0.500, 0.500, 0.500);
push('3', 0.500, 0.500, 0.500, 0.500);
push('4', 0.500, 0.500, 0.500, 0.500);
push('5', 0.500, 0.500, 0.500, 0.500);
push('6', 0.500, 0.500, 0.500, 0.500);
push('7', 0.500, 0.500, 0.500, 0.500);
push('8', 0.500, 0.500, 0.500, 0.500);
push('9', 0.500, 0.500, 0.500, 0.500);
push(':', 0.278, 0.333, 0.333, 0.333);
push(';', 0.278, 0.333, 0.333, 0.333);
push('<', 0.564, 0.570, 0.675, 0.570);
push('=', 0.564, 0.570, 0.675, 0.570);
push('>', 0.564, 0.570, 0.675, 0.570);
push('?', 0.444, 0.500, 0.500, 0.500);
push('@', 0.921, 0.930, 0.920, 0.832);
push('A', 0.722, 0.722, 0.611, 0.667);
push('B', 0.667, 0.667, 0.611, 0.667);
push('C', 0.667, 0.722, 0.667, 0.667);
push('D', 0.722, 0.722, 0.722, 0.722);
push('E', 0.611, 0.667, 0.611, 0.667);
push('F', 0.556, 0.611, 0.611, 0.667);
push('G', 0.722, 0.778, 0.722, 0.722);
push('H', 0.722, 0.778, 0.722, 0.778);
push('I', 0.333, 0.389, 0.333, 0.389);
push('J', 0.389, 0.500, 0.444, 0.500);
push('K', 0.722, 0.778, 0.667, 0.667);
push('L', 0.611, 0.667, 0.556, 0.611);
push('M', 0.889, 0.944, 0.833, 0.889);
push('N', 0.722, 0.722, 0.667, 0.722);
push('O', 0.722, 0.778, 0.722, 0.722);
push('P', 0.556, 0.611, 0.611, 0.611);
push('Q', 0.722, 0.778, 0.722, 0.722);
push('R', 0.667, 0.722, 0.611, 0.667);
push('S', 0.556, 0.556, 0.500, 0.556);
push('T', 0.611, 0.667, 0.556, 0.611);
push('U', 0.722, 0.722, 0.722, 0.722);
push('V', 0.722, 0.722, 0.611, 0.667);
push('W', 0.944, 1.000, 0.833, 0.889);
push('X', 0.722, 0.722, 0.611, 0.667);
push('Y', 0.722, 0.722, 0.556, 0.611);
push('Z', 0.611, 0.667, 0.556, 0.611);
push('[', 0.333, 0.333, 0.389, 0.333);
push('\\', 0.278, 0.278, 0.278, 0.278);
push(']', 0.333, 0.333, 0.389, 0.333);
push('^', 0.469, 0.581, 0.422, 0.570);
push('_', 0.500, 0.500, 0.500, 0.500);
push('`', 0.333, 0.333, 0.333, 0.333);
push('a', 0.444, 0.500, 0.500, 0.500);
push('b', 0.500, 0.556, 0.500, 0.500);
push('c', 0.444, 0.444, 0.444, 0.444);
push('d', 0.500, 0.556, 0.500, 0.500);
push('e', 0.444, 0.444, 0.444, 0.444);
push('f', 0.333, 0.333, 0.278, 0.333);
push('g', 0.500, 0.500, 0.500, 0.500);
push('h', 0.500, 0.556, 0.500, 0.556);
push('i', 0.278, 0.278, 0.278, 0.278);
push('j', 0.278, 0.333, 0.278, 0.278);
push('k', 0.500, 0.556, 0.444, 0.500);
push('l', 0.278, 0.278, 0.278, 0.278);
push('m', 0.778, 0.833, 0.722, 0.778);
push('n', 0.500, 0.556, 0.500, 0.556);
push('o', 0.500, 0.500, 0.500, 0.500);
push('p', 0.500, 0.556, 0.500, 0.500);
push('q', 0.500, 0.556, 0.500, 0.500);
push('r', 0.333, 0.444, 0.389, 0.389);
push('s', 0.389, 0.389, 0.389, 0.389);
push('t', 0.278, 0.333, 0.278, 0.278);
push('u', 0.500, 0.556, 0.500, 0.556);
push('v', 0.500, 0.500, 0.444, 0.444);
push('w', 0.722, 0.722, 0.667, 0.667);
push('x', 0.500, 0.500, 0.444, 0.500);
push('y', 0.500, 0.500, 0.444, 0.444);
push('z', 0.444, 0.444, 0.389, 0.389);
push('{', 0.480, 0.394, 0.400, 0.348);
push('|', 0.200, 0.220, 0.275, 0.220);
push('}', 0.480, 0.394, 0.400, 0.348);
push('~', 0.541, 0.520, 0.541, 0.570);
push('€', 0.500, 0.500, 0.500, 0.500);
push('‚', 0.333, 0.333, 0.333, 0.333);
push('ƒ', 0.500, 0.500, 0.500, 0.500);
push('„', 0.444, 0.500, 0.556, 0.500);
push('…', 1.000, 1.000, 0.889, 1.000);
push('†', 0.500, 0.500, 0.500, 0.500);
push('‡', 0.500, 0.500, 0.500, 0.500);
push('ˆ', 0.333, 0.333, 0.333, 0.333);
push('‰', 1.000, 1.000, 1.000, 1.000);
push('Š', 0.556, 0.556, 0.500, 0.556);
push('‹', 0.333, 0.333, 0.333, 0.333);
push('Œ', 0.889, 1.000, 0.944, 0.944);
push('Ž', 0.611, 0.667, 0.556, 0.611);
push('‘', 0.333, 0.333, 0.333, 0.333);
push('’', 0.333, 0.333, 0.333, 0.333);
push('“', 0.444, 0.500, 0.556, 0.500);
push('”', 0.444, 0.500, 0.556, 0.500);
push('•', 0.350, 0.350, 0.350, 0.350);
push('–', 0.500, 0.500, 0.500, 0.500);
push('—', 1.000, 1.000, 0.889, 1.000);
push('˜', 0.333, 0.333, 0.333, 0.333);
push('™', 0.980, 1.000, 0.980, 1.000);
push('š', 0.389, 0.389, 0.389, 0.389);
push('›', 0.333, 0.333, 0.333, 0.333);
push('œ', 0.722, 0.722, 0.667, 0.722);
push('ž', 0.444, 0.444, 0.389, 0.389);
push('Ÿ', 0.722, 0.722, 0.556, 0.611);
push('¡', 0.333, 0.333, 0.389, 0.389);
push('¢', 0.500, 0.500, 0.500, 0.500);
push('£', 0.500, 0.500, 0.500, 0.500);
push('¤', 0.500, 0.500, 0.500, 0.500);
push('¥', 0.500, 0.500, 0.500, 0.500);
push('¦', 0.200, 0.220, 0.275, 0.220);
push('§', 0.500, 0.500, 0.500, 0.500);
push('¨', 0.333, 0.333, 0.333, 0.333);
push('©', 0.760, 0.747, 0.760, 0.747);
push('ª', 0.276, 0.300, 0.276, 0.266);
push('«', 0.500, 0.500, 0.500, 0.500);
push('¬', 0.564, 0.570, 0.675, 0.606);
push('-', 0.333, 0.333, 0.333, 0.333);
push('®', 0.760, 0.747, 0.760, 0.747);
push('¯', 0.500, 0.500, 0.500, 0.500);
push('°', 0.400, 0.400, 0.400, 0.400);
push('±', 0.549, 0.549, 0.549, 0.549);
push('²', 0.300, 0.300, 0.300, 0.300);
push('³', 0.300, 0.300, 0.300, 0.300);
push('´', 0.333, 0.333, 0.333, 0.333);
push('µ', 0.576, 0.576, 0.576, 0.576);
push('¶', 0.453, 0.540, 0.523, 0.500);
push('·', 0.333, 0.333, 0.250, 0.250);
push('¸', 0.333, 0.333, 0.333, 0.333);
push('¹', 0.300, 0.300, 0.300, 0.300);
push('º', 0.310, 0.330, 0.310, 0.300);
push('»', 0.500, 0.500, 0.500, 0.500);
push('¼', 0.750, 0.750, 0.750, 0.750);
push('½', 0.750, 0.750, 0.750, 0.750);
push('¾', 0.750, 0.750, 0.750, 0.750);
push('¿', 0.444, 0.500, 0.500, 0.500);
push('À', 0.722, 0.722, 0.611, 0.667);
push('Á', 0.722, 0.722, 0.611, 0.667);
push('Â', 0.722, 0.722, 0.611, 0.667);
push('Ã', 0.722, 0.722, 0.611, 0.667);
push('Ä', 0.722, 0.722, 0.611, 0.667);
push('Å', 0.722, 0.722, 0.611, 0.667);
push('Æ', 0.889, 1.000, 0.889, 0.944);
push('Ç', 0.667, 0.722, 0.667, 0.667);
push('È', 0.611, 0.667, 0.611, 0.667);
push('É', 0.611, 0.667, 0.611, 0.667);
push('Ê', 0.611, 0.667, 0.611, 0.667);
push('Ë', 0.611, 0.667, 0.611, 0.667);
push('Ì', 0.333, 0.389, 0.333, 0.389);
push('Í', 0.333, 0.389, 0.333, 0.389);
push('Î', 0.333, 0.389, 0.333, 0.389);
push('Ï', 0.333, 0.389, 0.333, 0.389);
push('Ð', 0.722, 0.722, 0.722, 0.722);
push('Ñ', 0.722, 0.722, 0.667, 0.722);
push('Ò', 0.722, 0.778, 0.722, 0.722);
push('Ó', 0.722, 0.778, 0.722, 0.722);
push('Ô', 0.722, 0.778, 0.722, 0.722);
push('Õ', 0.722, 0.778, 0.722, 0.722);
push('Ö', 0.722, 0.778, 0.722, 0.722);
push('×', 0.564, 0.570, 0.675, 0.570);
push('Ø', 0.722, 0.778, 0.722, 0.722);
push('Ù', 0.722, 0.722, 0.722, 0.722);
push('Ú', 0.722, 0.722, 0.722, 0.722);
push('Û', 0.722, 0.722, 0.722, 0.722);
push('Ü', 0.722, 0.722, 0.722, 0.722);
push('Ý', 0.722, 0.722, 0.556, 0.611);
push('Þ', 0.556, 0.611, 0.611, 0.611);
push('ß', 0.500, 0.556, 0.500, 0.500);
push('à', 0.444, 0.500, 0.500, 0.500);
push('á', 0.444, 0.500, 0.500, 0.500);
push('â', 0.444, 0.500, 0.500, 0.500);
push('ã', 0.444, 0.500, 0.500, 0.500);
push('ä', 0.444, 0.500, 0.500, 0.500);
push('å', 0.444, 0.500, 0.500, 0.500);
push('æ', 0.667, 0.722, 0.667, 0.722);
push('ç', 0.444, 0.444, 0.444, 0.444);
push('è', 0.444, 0.444, 0.444, 0.444);
push('é', 0.444, 0.444, 0.444, 0.444);
push('ê', 0.444, 0.444, 0.444, 0.444);
push('ë', 0.444, 0.444, 0.444, 0.444);
push('ì', 0.278, 0.278, 0.278, 0.278);
push('í', 0.278, 0.278, 0.278, 0.278);
push('î', 0.278, 0.278, 0.278, 0.278);
push('ï', 0.278, 0.278, 0.278, 0.278);
push('ð', 0.500, 0.500, 0.500, 0.500);
push('ñ', 0.500, 0.556, 0.500, 0.556);
push('ò', 0.500, 0.500, 0.500, 0.500);
push('ó', 0.500, 0.500, 0.500, 0.500);
push('ô', 0.500, 0.500, 0.500, 0.500);
push('õ', 0.500, 0.500, 0.500, 0.500);
push('ö', 0.500, 0.500, 0.500, 0.500);
push('÷', 0.549, 0.549, 0.549, 0.549);
push('ø', 0.500, 0.500, 0.500, 0.500);
push('ù', 0.500, 0.556, 0.500, 0.556);
push('ú', 0.500, 0.556, 0.500, 0.556);
push('û', 0.500, 0.556, 0.500, 0.556);
push('ü', 0.500, 0.556, 0.500, 0.556);
push('ý', 0.500, 0.500, 0.444, 0.444);
push('þ', 0.500, 0.556, 0.500, 0.500);
push('ÿ', 0.500, 0.500, 0.444, 0.444);
