// Sourced from: https://www.kreativekorp.com/ucsur/charts/sitelen.html
const NIMI = {
  "A": String.fromCodePoint(0xF1900),
  "AKESI": String.fromCodePoint(0xF1901),
  "ALA": String.fromCodePoint(0xF1902),
  "ALASA": String.fromCodePoint(0xF1903),
  "ALI": String.fromCodePoint(0xF1904),
  "ALE": String.fromCodePoint(0xF1904),
  "ANPA": String.fromCodePoint(0xF1905),
  "ANTE": String.fromCodePoint(0xF1906),
  "ANU": String.fromCodePoint(0xF1907),
  "AWEN": String.fromCodePoint(0xF1908),
  "E": String.fromCodePoint(0xF1909),
  "EN": String.fromCodePoint(0xF190A),
  "ESUN": String.fromCodePoint(0xF190B),
  "IJO": String.fromCodePoint(0xF190C),
  "IKE": String.fromCodePoint(0xF190D),
  "ILO": String.fromCodePoint(0xF190E),
  "INSA": String.fromCodePoint(0xF190F),
  "JAKI": String.fromCodePoint(0xF1910),
  "JAN": String.fromCodePoint(0xF1911),
  "JELO": String.fromCodePoint(0xF1912),
  "JO": String.fromCodePoint(0xF1913),
  "KALA": String.fromCodePoint(0xF1914),
  "KALAMA": String.fromCodePoint(0xF1915),
  "KAMA": String.fromCodePoint(0xF1916),
  "KASI": String.fromCodePoint(0xF1917),
  "KEN": String.fromCodePoint(0xF1918),
  "KEPEKEN": String.fromCodePoint(0xF1919),
  "KILI": String.fromCodePoint(0xF191A),
  "KIWEN": String.fromCodePoint(0xF191B),
  "KO": String.fromCodePoint(0xF191C),
  "KON": String.fromCodePoint(0xF191D),
  "KULE": String.fromCodePoint(0xF191E),
  "KULUPU": String.fromCodePoint(0xF191F),
  "KUTE": String.fromCodePoint(0xF1920),
  "LA": String.fromCodePoint(0xF1921),
  "LAPE": String.fromCodePoint(0xF1922),
  "LASO": String.fromCodePoint(0xF1923),
  "LAWA": String.fromCodePoint(0xF1924),
  "LEN": String.fromCodePoint(0xF1925),
  "LETE": String.fromCodePoint(0xF1926),
  "LI": String.fromCodePoint(0xF1927),
  "LILI": String.fromCodePoint(0xF1928),
  "LINJA": String.fromCodePoint(0xF1929),
  "LIPU": String.fromCodePoint(0xF192A),
  "LOJE": String.fromCodePoint(0xF192B),
  "LON": String.fromCodePoint(0xF192C),
  "LUKA": String.fromCodePoint(0xF192D),
  "LUKIN": String.fromCodePoint(0xF192E),
  "LUPA": String.fromCodePoint(0xF192F),
  "MA": String.fromCodePoint(0xF1930),
  "MAMA": String.fromCodePoint(0xF1931),
  "MANI": String.fromCodePoint(0xF1932),
  "MELI": String.fromCodePoint(0xF1933),
  "MI": String.fromCodePoint(0xF1934),
  "MIJE": String.fromCodePoint(0xF1935),
  "MOKU": String.fromCodePoint(0xF1936),
  "MOLI": String.fromCodePoint(0xF1937),
  "MONSI": String.fromCodePoint(0xF1938),
  "MU": String.fromCodePoint(0xF1939),
  "MUN": String.fromCodePoint(0xF193A),
  "MUSI": String.fromCodePoint(0xF193B),
  "MUTE": String.fromCodePoint(0xF193C),
  "NANPA": String.fromCodePoint(0xF193D),
  "NASA": String.fromCodePoint(0xF193E),
  "NASIN": String.fromCodePoint(0xF193F),
  "NENA": String.fromCodePoint(0xF1940),
  "NI": String.fromCodePoint(0xF1941),
  "NIMI": String.fromCodePoint(0xF1942),
  "NOKA": String.fromCodePoint(0xF1943),
  "O": String.fromCodePoint(0xF1944),
  "OLIN": String.fromCodePoint(0xF1945),
  "ONA": String.fromCodePoint(0xF1946),
  "OPEN": String.fromCodePoint(0xF1947),
  "PAKALA": String.fromCodePoint(0xF1948),
  "PALI": String.fromCodePoint(0xF1949),
  "PALISA": String.fromCodePoint(0xF194A),
  "PAN": String.fromCodePoint(0xF194B),
  "PANA": String.fromCodePoint(0xF194C),
  "PI": String.fromCodePoint(0xF194D),
  "PILIN": String.fromCodePoint(0xF194E),
  "PIMEJA": String.fromCodePoint(0xF194F),
  "PINI": String.fromCodePoint(0xF1950),
  "PIPI": String.fromCodePoint(0xF1951),
  "POKA": String.fromCodePoint(0xF1952),
  "POKI": String.fromCodePoint(0xF1953),
  "PONA": String.fromCodePoint(0xF1954),
  "PU": String.fromCodePoint(0xF1955),
  "SAMA": String.fromCodePoint(0xF1956),
  "SELI": String.fromCodePoint(0xF1957),
  "SELO": String.fromCodePoint(0xF1958),
  "SEME": String.fromCodePoint(0xF1959),
  "SEWI": String.fromCodePoint(0xF195A),
  "SIJELO": String.fromCodePoint(0xF195B),
  "SIKE": String.fromCodePoint(0xF195C),
  "SIN": String.fromCodePoint(0xF195D),
  "SINA": String.fromCodePoint(0xF195E),
  "SINPIN": String.fromCodePoint(0xF195F),
  "SITELEN": String.fromCodePoint(0xF1960),
  "SONA": String.fromCodePoint(0xF1961),
  "SOWELI": String.fromCodePoint(0xF1962),
  "SULI": String.fromCodePoint(0xF1963),
  "SUNO": String.fromCodePoint(0xF1964),
  "SUPA": String.fromCodePoint(0xF1965),
  "SUWI": String.fromCodePoint(0xF1966),
  "TAN": String.fromCodePoint(0xF1967),
  "TASO": String.fromCodePoint(0xF1968),
  "TAWA": String.fromCodePoint(0xF1969),
  "TELO": String.fromCodePoint(0xF196A),
  "TENPO": String.fromCodePoint(0xF196B),
  "TOKI": String.fromCodePoint(0xF196C),
  "TOMO": String.fromCodePoint(0xF196D),
  "TU": String.fromCodePoint(0xF196E),
  "UNPA": String.fromCodePoint(0xF196F),
  "UTA": String.fromCodePoint(0xF1970),
  "UTALA": String.fromCodePoint(0xF1971),
  "WALO": String.fromCodePoint(0xF1972),
  "WAN": String.fromCodePoint(0xF1973),
  "WASO": String.fromCodePoint(0xF1974),
  "WAWA": String.fromCodePoint(0xF1975),
  "WEKA": String.fromCodePoint(0xF1976),
  "WILE": String.fromCodePoint(0xF1977),
  "NAMAKO": String.fromCodePoint(0xF1978),
  "KIN": String.fromCodePoint(0xF1979),
  "OKO": String.fromCodePoint(0xF197A),
  "KIPISI": String.fromCodePoint(0xF197B),
  "LEKO": String.fromCodePoint(0xF197C),
  "MONSUTA": String.fromCodePoint(0xF197D),
  "TONSI": String.fromCodePoint(0xF197E),
  "JASIMA": String.fromCodePoint(0xF197F),
  "KIJETESANTAKALU": String.fromCodePoint(0xF1980),
  "SOKO": String.fromCodePoint(0xF1981),
  "MESO": String.fromCodePoint(0xF1982),
  "EPIKU": String.fromCodePoint(0xF1983),
  "KOKOSILA": String.fromCodePoint(0xF1984),
  "LANPAN": String.fromCodePoint(0xF1985),
  "N": String.fromCodePoint(0xF1986),
  "MISIKEKE": String.fromCodePoint(0xF1987),
  "KU": String.fromCodePoint(0xF1988),
  "PAKE": String.fromCodePoint(0xF19A0),
  "APEJA": String.fromCodePoint(0xF19A1),
  "MAJUNA": String.fromCodePoint(0xF19A2),
  "POWE": String.fromCodePoint(0xF19A3),
  "~": String.fromCodePoint(0xF1996),
  "`": String.fromCodePoint(0xF1995)
}
const NIMI_LONG_PI = {
  "[": "BEGIN_LONG_PI",
  "]": "END_LONG_PI"
}
const NIMI_CARTOUCHE = {
  "{": "BEGIN_CARTOUCHE",
  "}": "END_CARTOUCHE"
}
const LEX_TABLE = {
  "BEGIN_LONG_PI": String.fromCodePoint(0xF1993),
  "IN_LONG_PI": String.fromCodePoint(0xF1994),
  "END_LONG_PI": "",
  "BEGIN_CARTOUCHE": String.fromCodePoint(0xF1990),
  "IN_CARTOUCHE": String.fromCodePoint(0xF1992),
  "END_CARTOUCHE": String.fromCodePoint(0xF1991),
}
const LEX_TABLE_OPENTYPE = {
  "BEGIN_LONG_PI": String.fromCodePoint(0xF194D) + String.fromCodePoint(0xF1997),
  "IN_LONG_PI": "",
  "END_LONG_PI": String.fromCodePoint(0xF1998),
  "BEGIN_CARTOUCHE": String.fromCodePoint(0xF1990),
  "IN_CARTOUCHE": "",
  "END_CARTOUCHE": String.fromCodePoint(0xF1991),
}

exports.sitelen = function(inString, { useCartouche=true, useLongPi=true, useOpenType=true } = {}) {
  // let splitRegex = '/(\W'
  // if (useCartouche) { splitRegex += '|\\{|\\}' }
  // if (useLongPi) { splitRegex += '|\\[|\\]' }
  const tokens = inString.split(/(\W|\[|\]|\{|\})/).filter(word => word.trim().length > 0).map(word => word.toUpperCase())
  let nimi = { ...NIMI }
  if (useCartouche) { nimi = { ...NIMI_CARTOUCHE, ...nimi } }
  if (useLongPi) { nimi = { ...NIMI_LONG_PI, ...nimi } }
  const lexemes = tokens.map(tok => nimi[tok] || tok);
  const out = [];

  let inLongPi = false;
  let inCartouche = false;
  const lex_table = useOpenType ? LEX_TABLE_OPENTYPE : LEX_TABLE
  for (const lexId in lexemes) {
    const lex = lexemes[lexId]
    if (inLongPi) { 
      if (lexemes[lexId - 1] !== 'BEGIN_LONG_PI') {
        out.push(lex_table.IN_LONG_PI) 
      }
    }
    if (inCartouche) { 
      if (lexemes[lexId - 1] !== 'BEGIN_CARTOUCHE') {
        out.push(lex_table.IN_CARTOUCHE)
      }
    }
    if (lex === 'BEGIN_LONG_PI') {
      inLongPi = true;
    } else if (lex === 'END_LONG_PI') {
      inLongPi = false;
    } else if (lex === 'BEGIN_CARTOUCHE') {
      inCartouche = true;
    } else if (lex === 'END_CARTOUCHE') {
      inCartouche = false;
    }
    
    out.push(lex_table[lex] === undefined ? lex : lex_table[lex])
  }
  return out.join('').toLowerCase()
}