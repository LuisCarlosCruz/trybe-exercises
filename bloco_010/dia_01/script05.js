const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

function verif (obj1, obj2) {
  if (obj1.title === obj2.title && obj1.description === obj2.description) {
    return true;
  }
  return false;
}
module.exports = verif;