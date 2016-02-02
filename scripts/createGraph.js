function createGraph(graph, numNodes) {
  console.log('Creating graph');
  var graph = new Graph();
  useWeightedEdges(graph);
  addEdgesToGraph(graph);

  return graph;
}

function addEdgesToGraph(graph, numNodes) {
  // Create an adjacency matrix to store already created edges, so we don't repeat them
  adjacencyMatrix = [];

  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
    graph.addNode(convertIndexToLetter(nodeIndex));
    console.log('Added node ' + convertIndexToLetter(nodeIndex))

    // Add a new row to the adjacency list
    adjacencyMatrix[nodeIndex] = initializeArrayWithZeros(numNodes);
  }

  // Then loop over again to add the edges between the nodes.
  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
    // Generate a random number of edges
    numEdges = Math.floor(Math.random() * Math.ceil(numNodes/3) + 1);
    for (edgeIndex = 0; edgeIndex < numEdges; edgeIndex++) {
      var otherNode = chooseNode(nodeIndex, numNodes);
      
      // If the edge doesn't already exist, create it
      if (!checkForExistingEdge(adjacencyMatrix, nodeIndex, otherNode)) {
        addEdgeToGraph(graph, nodeIndex, otherNode);        

        // Update the adjacency matrix
        adjacencyMatrix[nodeIndex][otherNode] = 1;
        adjacencyMatrix[otherNode][nodeIndex] = 1;
      }
    }
  }
}

function checkForExistingEdge(adjacencyMatrix, nodeA, nodeB) {
  if (adjacencyMatrix[nodeA][nodeB]) {
    return true;
  }
  else {
    return false;
  }
}

function addEdgeToGraph(graph, nodeIndex, otherNode) {
  var nodeName = convertIndexToLetter(nodeIndex);
  var otherNodeName = convertIndexToLetter(otherNode);

  // flip a coin to decide which direction the edge goes
  if (coinFlip()) { // heads goes away
    graph.addEdge(nodeName, otherNodeName);
  }
  else { // tails goes towards
    graph.addEdge(otherNodeName, nodeName);
  }
}

// Borrowed from https://github.com/strathausen/dracula/blob/master/examples/algorithms.js
function useWeightedEdges(graph) {
  /* modify the addEdge function to attach random weights */
  graph.addEdgeToGraph = graph.addEdge;
  graph.addEdge = function(from, to, style) {
    !style && (style = {});
    weight = Math.floor(Math.random() * 10) + 1;
    style = { label : weight,
            "label-style" : {
                "font-size": 40
            }
        };
    style.weight = weight;
    var edge = graph.addEdgeToGraph(from, to, style);
    edge.weight = style.weight;
    console.log("added edge of weight " + weight);
  };
}


function chooseNode(nodeIndex, numNodes) {
  var node = nodeIndex;
  while(node === nodeIndex) {
    node = Math.floor(Math.random() * (numNodes - 1)) + 1;
  }
  return node;
}