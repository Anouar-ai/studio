
export type Country = {
  id: string;
  name: string;
  code: string;
};

const countryData: [string, string][] = [
  ["Afghanistan", "af"], ["Albania", "al"], ["Algeria", "dz"], ["Andorra", "ad"], ["Angola", "ao"], ["Antigua and Barbuda", "ag"],
  ["Argentina", "ar"], ["Armenia", "am"], ["Australia", "au"], ["Austria", "at"], ["Azerbaijan", "az"], ["Bahamas", "bs"],
  ["Bahrain", "bh"], ["Bangladesh", "bd"], ["Barbados", "bb"], ["Belarus", "by"], ["Belgium", "be"], ["Belize", "bz"],
  ["Benin", "bj"], ["Bhutan", "bt"], ["Bolivia", "bo"], ["Bosnia and Herzegovina", "ba"], ["Botswana", "bw"], ["Brazil", "br"],
  ["Brunei", "bn"], ["Bulgaria", "bg"], ["Burkina Faso", "bf"], ["Burma", "mm"], ["Burundi", "bi"], ["Cabo Verde", "cv"],
  ["Cambodia", "kh"], ["Cameroon", "cm"], ["Canada", "ca"], ["Cayman Islands", "ky"], ["Central African Republic", "cf"],
  ["Chad", "td"], ["Chile", "cl"], ["China", "cn"], ["Colombia", "co"], ["Comoros", "km"], ["Congo Free State", "cd"],
  ["Cook Islands", "ck"], ["Costa Rica", "cr"], ["Cote d’Ivoire (Ivory Coast)", "ci"], ["Croatia", "hr"], ["Cuba", "cu"],
  ["Cyprus", "cy"], ["Czechia", "cz"], ["Democratic Republic of the Congo", "cd"], ["Denmark", "dk"], ["Djibouti", "dj"],
  ["Dominica", "dm"], ["Dominican Republic", "do"], ["East Germany", "de"], ["Ecuador", "ec"], ["Egypt", "eg"],
  ["El Salvador", "sv"], ["Equatorial Guinea", "gq"], ["Eritrea", "er"], ["Estonia", "ee"], ["Eswatini", "sz"], ["Ethiopia", "et"],
  ["Fiji", "fj"], ["Finland", "fi"], ["France", "fr"], ["Gabon", "ga"], ["Gambia", "gm"], ["Georgia", "ge"], ["Germany", "de"],
  ["Ghana", "gh"], ["Greece", "gr"], ["Grenada", "gd"], ["Guatemala", "gt"], ["Guinea", "gn"], ["Guinea-Bissau", "gw"],
  ["Guyana", "gy"], ["Haiti", "ht"], ["Holy See", "va"], ["Honduras", "hn"], ["Hungary", "hu"], ["Iceland", "is"], ["India", "in"],
  ["Indonesia", "id"], ["Iran", "ir"], ["Iraq", "iq"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Jamaica", "jm"],
  ["Japan", "jp"], ["Jordan", "jo"], ["Kazakhstan", "kz"], ["Kenya", "ke"], ["Kiribati", "ki"], ["Korea", "kr"], ["Kosovo", "xk"],
  ["Kuwait", "kw"], ["Kyrgyzstan", "kg"], ["Laos", "la"], ["Latvia", "lv"], ["Lebanon", "lb"], ["Lesotho", "ls"], ["Liberia", "lr"],
  ["Libya", "ly"], ["Liechtenstein", "li"], ["Lithuania", "lt"], ["Luxembourg", "lu"], ["Madagascar", "mg"], ["Malawi", "mw"],
  ["Malaysia", "my"], ["Maldives", "mv"], ["Mali", "ml"], ["Malta", "mt"], ["Marshall Islands", "mh"], ["Mauritania", "mr"],
  ["Mauritius", "mu"], ["Mexico", "mx"], ["Micronesia", "fm"], ["Moldova", "md"], ["Monaco", "mc"], ["Mongolia", "mn"],
  ["Montenegro", "me"], ["Morocco", "ma"], ["Mozambique", "mz"], ["Namibia", "na"], ["Nauru", "nr"], ["Nepal", "np"],
  ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nicaragua", "ni"], ["Niger", "ne"], ["Nigeria", "ng"], ["Niue", "nu"],
  ["North Macedonia", "mk"], ["Norway", "no"], ["Oman", "om"], ["Pakistan", "pk"], ["Palau", "pw"], ["Panama", "pa"],
  ["Papua New Guinea", "pg"], ["Paraguay", "py"], ["Peru", "pe"], ["Philippines", "ph"], ["Poland", "pl"], ["Portugal", "pt"],
  ["Qatar", "qa"], ["Republic of the Congo", "cg"], ["Romania", "ro"], ["Russia", "ru"], ["Rwanda", "rw"], ["Saint Kitts and Nevis", "kn"],
  ["Saint Lucia", "lc"], ["Saint Vincent and the Grenadines", "vc"], ["Samoa", "ws"], ["San Marino", "sm"],
  ["Sao Tome and Principe", "st"], ["Saudi Arabia", "sa"], ["Senegal", "sn"], ["Serbia", "rs"], ["Seychelles", "sc"],
  ["Sierra Leone", "sl"], ["Singapore", "sg"], ["Slovakia", "sk"], ["Slovenia", "si"], ["Solomon Islands", "sb"],
  ["Somalia", "so"], ["South Africa", "za"], ["South Sudan", "ss"], ["Spain", "es"], ["Sri Lanka", "lk"], ["Sudan", "sd"],
  ["Suriname", "sr"], ["Sweden", "se"], ["Switzerland", "ch"], ["Syria", "sy"], ["Tajikistan", "tj"], ["Tanzania", "tz"],
  ["Thailand", "th"], ["Timor-Leste", "tl"], ["Togo", "tg"], ["Tonga", "to"], ["Trinidad and Tobago", "tt"], ["Tunisia", "tn"],
  ["Turkey", "tr"], ["Turkmenistan", "tm"], ["Tuvalu", "tv"], ["Uganda", "ug"], ["Ukraine", "ua"], ["United Arab Emirates", "ae"],
  ["United Kingdom", "gb"], ["Uruguay", "uy"], ["Uzbekistan", "uz"], ["Vanuatu", "vu"], ["Venezuela", "ve"], ["Vietnam", "vn"],
  ["Yemen", "ye"], ["Zambia", "zm"], ["Zimbabwe", "zw"]
];

function createId(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\(.*\)/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

export const allCountries: Country[] = countryData.map(([name, code]) => ({
  name: name,
  id: createId(name),
  code: code,
}));

export function getCountryById(id: string): Country | undefined {
    return allCountries.find(c => c.id === id);
}

export async function generateStaticParams() {
  return allCountries.map((country) => ({
    country: country.id,
  }));
}
