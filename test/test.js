module('selector tests');
test('tag selector', function() {
  equal(document.getElementById('idUl'), orange('ul').el[0]);
});

test('id selector', function() {
  equal(document.getElementById('idUl'), orange('#idUl').el[0]);
});

test('class selector', function() {
  equal(document.getElementById('idUl'), orange('.classUl').el[0]);
});

test('chained selector', function() {
  equal(document.getElementById('idUl'), orange('#container .classUl').el[0]);
});

module('class methods');
test('has: class have', function() {
  equal(true, orange('#container .classUl').has('classUl'));
});

test('has: class don\'t have', function() {
  equal(false, orange('#container .classUl').has('donthave'));
});