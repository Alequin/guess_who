
import attributes from "./attributes";

const characters = [];

const alex = {
  name: "alex",
  gender: attributes.gender.male,
  hair: attributes.hair.black,
  nose: attributes.nose.small,
  mustache: attributes.mustache.black,
  beard: attributes.beard.black,
  glasses: attributes.glasses.none,
};
characters.push(alex);

const alfred = {
  name: "alfred",
  gender: attributes.gender.male,
  hair: attributes.hair.ginger,
  nose: attributes.nose.small,
  mustache: attributes.mustache.ginger,
  glasses: attributes.glasses.none,
};
characters.push(alfred);

const anita = {
  name: "anita",
  gender: attributes.gender.female,
  hair: attributes.hair.blonde,
  nose: attributes.nose.small,
  glasses: attributes.glasses.none,
};
characters.push(anita);

const anne = {
  name: "anne",
  gender: attributes.gender.female,
  hair: attributes.hair.black,
  nose: attributes.nose.large,
  glasses: attributes.glasses.none,
};
characters.push(anne);

const bernard = {
  name: "bernard",
  gender: attributes.gender.male,
  hair: attributes.hair.brown,
  nose: attributes.nose.large,
  hat: attributes.hat.grey,
  glasses: attributes.glasses.none,
};
characters.push(bernard);

const bill = {
  name: "bill",
  gender: attributes.gender.male,
  nose: attributes.nose.small,
  beard: attributes.beard.ginger,
  glasses: attributes.glasses.none,
};
characters.push(bill);

const charles = {
  name: "charles",
  gender: attributes.gender.male,
  hair: attributes.hair.blonde,
  nose: attributes.nose.small,
  mustache: attributes.mustache.blonde,
  glasses: attributes.glasses.none,
};
characters.push(charles);

const claire = {
  name: "claire",
  gender: attributes.gender.female,
  hair: attributes.hair.ginger,
  nose: attributes.nose.small,
  glasses: attributes.glasses.has,
  hat: attributes.hat.yellow
};
characters.push(claire);

export default characters;
