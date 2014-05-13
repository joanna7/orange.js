orange('ul').addEvent('mouseenter', function() {
  console.log('in');
  this.style.backgroundColor = 'red';
}).addEvent('mouseleave', function() {
  this.style.backgroundColor = '#fff';
});