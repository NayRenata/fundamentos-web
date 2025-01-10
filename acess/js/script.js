document.querySelectorAll('input, textarea').forEach(function(el) {
    el.onfocus = function() { this.style.backgroundColor = '#FFEB3B'; };
    el.onblur = function() { this.style.backgroundColor = ''; };
});
