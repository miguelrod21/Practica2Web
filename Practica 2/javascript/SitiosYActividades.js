const annotate = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;

const e = document.querySelector('.place-url');
const annotation = annotate(e, { type: 'circle', color: 'crimson'});
annotation.show();

const a = document.querySelector('.Ini');
const annotation1 = annotate(a, { type: 'highlight', color: 'yellow'});
annotation1.show();