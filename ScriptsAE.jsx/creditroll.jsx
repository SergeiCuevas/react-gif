// Crear un nuevo proyecto
var proj = app.newProject();

// Crear una nueva composición
var comp = proj.items.addComp('Credit Roll', 1920, 1080, 1, 10, 30);

// Crear un nuevo texto
var text = comp.layers.addText('Diseñado por:', {
  fontSize: 80,
  font: 'Arial',
  fillColor: [1, 1, 1]
});

// Establecer las opciones de Roll/Crawl
text.property("Source Text").setValue('Diseñado por: Juan Pérez, Ana Gómez, Pedro González');
text.property("Position").setValue([960, 540]);
text.property("Anchor Point").setValue([0, 0]);
text.property("Scale").setValue([50, 50]);
text.property("Source Text").property("Crawl Options").property("Direction").setValue(1);
text.property("Source Text").property("Crawl Options").property("Speed").setValue(60);
text.property("Source Text").property("Crawl Options").property("Alignment").setValue(2);
/*
// Renderizar la composición
var renderQueue = app.project.renderQueue;
var outputModule = comp.addRenderItem().outputModule(1);
outputModule.applyTemplate("H.264");
outputModule.file = new File("~/Desktop/credit-roll.mp4");
renderQueue.render();/ */