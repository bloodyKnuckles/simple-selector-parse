module.exports = function (sel) {
  sel = sel || '';
  var selectors = sel.split(/((\.|#).+)/);
  var tag = selectors[0] || 'div';
  selectors = selectors[1] || '';

  var hashparts = selectors.split('#');
  var id,
    classes = hashparts.shift().split('.').slice(1);

  for (i = 0; i < hashparts.length; i++) {
    var dotparts = hashparts[i].split('.');
    id = dotparts.shift() || undefined;
    classes.push.apply(classes, dotparts);
  }
  var ret = {}
  if ( tag ) { ret.tag = tag; }
  if ( id ) { ret.id = id; }
  if ( classes.length ) { ret.classes = classes; }
  return ret;
}
