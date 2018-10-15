const calculateLatticePaths=function(gridSize){
  latticePaths=[];
  for(let index=0;index<=gridSize;index++){
    latticePaths[index]=1;
  }
  for(let index=1;index<=gridSize;index++){
    for(let pos=1;pos<=gridSize;pos++){
      latticePaths[pos]+=latticePaths[pos-1];
    }
  }
  return latticePaths[gridSize];
}
exports.calculateLatticePaths=calculateLatticePaths;
