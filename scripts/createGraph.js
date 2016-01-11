// Loop over each friend in the friendlist, and draw connections
function createGraph(numNodes) {
  var graph = new Graph();

  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
  	graph.addNode(String.fromCharCode(65 + nodeIndex));
  }

  // Then loop over again to add the edges between the nodes.
  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
    // Generate a random number of edges
    numEdges = Math.floor(Math.random() * ceil(numNodes/2)) + 1;
    for (edgeIndex = 0; edgeIndex < numEdges; edgeIndex++) {
      var otherNode = chooseNode(nodeIndex, numNodes);
      // flip a coin to decide which direction the edge goes
      if (coinFlip()) { // heads goes away
        graph.addEdge(nodeIndex, otherNode, { directed : true } );
      }
      else { // tails goes towards
        graph.addEdge(otherNode, nodeIndex, { directed : true } );
      }


  drawGraph(friendGraph);
}

function drawGraph(friendGraph) {
  // layout the graph using the Spring layout implementation
  var layouter = new Graph.Layout.Spring(g);
  layouter.layout();
   
  // draw the graph using the RaphaelJS draw implementation
  var renderer = new Graph.Renderer.Raphael('canvas', friendGraph, width, height);
  renderer.draw();
}

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}

function chooseNode(nodeIndex, numNodes) {
  var node = nodeIndex;
  while(node === nodeIndex) {
    node = Math.floor(Math.random() * numNodes) + 1;
  }
  return node;
}