function redraw() {
    layouter.layout();
    renderer.draw();
};

function createAndShowGraph() {
  var numNodes = 5;
  graph = createGraph(numNodes);
  drawGraph(graph);
}

// Loop over each friend in the friendlist, and draw connections
function createGraph(numNodes) {
  console.log('Creating graph');
  var graph = new Graph();

  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
  	graph.addNode(convertIndexToLetter(nodeIndex));
    console.log('Added node ' + convertIndexToLetter(nodeIndex))
  }

  // Then loop over again to add the edges between the nodes.
  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
    // Generate a random number of edges
    numEdges = Math.floor(Math.random() * Math.ceil(numNodes/2)) + 1;
    for (edgeIndex = 0; edgeIndex < numEdges; edgeIndex++) {
      var otherNode = chooseNode(nodeIndex, numNodes);
      var nodeName = convertIndexToLetter(nodeIndex);
      var otherNodeName = convertIndexToLetter(otherNode);

      // flip a coin to decide which direction the edge goes
      if (coinFlip()) { // heads goes away
        graph.addEdge(nodeName, otherNodeName, { directed : true } );
      }
      else { // tails goes towards
        graph.addEdge(otherNodeName, nodeName, { directed : true } );
      }
    }
  }

  return graph;
}

function drawGraph(graph) {
  // layout the graph using the Spring layout implementation
  var layouter = new Graph.Layout.Spring(graph);
  layouter.layout();
   
  // draw the graph using the RaphaelJS draw implementation
  var width = document.getElementById("canvas").offsetWidth - 30;
  var height = 400;
  var renderer = new Graph.Renderer.Raphael('canvas', graph, width, height);
  renderer.draw();
}

function render(r, n) {
  var label = r.text(0, 30, n.label).attr({opacity:0});
  //the Raphael set is obligatory, containing all you want to display 
  var set = r.set().push(
      r.rect(-30, -13, 62, 86)
        .attr({"fill": "#fa8",
              "stroke-width": 2
              , r : 9}))
  .push(label);
  // make the label show only on hover 
  set.hover(
    function mouseIn() {
      label.animate({opacity:1,"fill-opacity":1}, 500);
    },
    function mouseOut() {
       label.animate({opacity:0},300);
    }
  );
}


function convertIndexToLetter(index) {
  return String.fromCharCode(65 + index);
}

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}

function chooseNode(nodeIndex, numNodes) {
  var node = nodeIndex;
  while(node === nodeIndex) {
    node = Math.floor(Math.random() * (numNodes - 1)) + 1;
  }
  return node;
}