
const selectElement = (s) => document.querySelector(s);

selectElement( s: '.open').addEventListener('click',() => {
    selectElement( s: '.nav-list').classlist.add('active');
});

selectElement( s: '.close').addEventListener('click', () => {
    selectElement( s: '.nav-list').classlist.remove( tokens: 'active');

});
