function set_normals(context, normals){
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(normals), context.STATIC_DRAW);
}

function set_up_normals(context, program, attribute_name, normals){
  var normal_attribute_location = context.getAttribLocation(program, attribute_name);
  
  // create buffer containing coordinates of points
  var normal_buffer = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, normal_buffer);
  set_normals(context, normals);

  // create vertex array and bind it to attribute
  //var vao = context.createVertexArray();
  //context.bindVertexArray(vao);
  context.enableVertexAttribArray(normal_attribute_location);
    
  var size = DIMENSION; // values per iteration
  var type = context.FLOAT; // the values are 32-bit float numbers
  var normalize = false; // don't normalize the data
  var stride = 0; // don't skip values while moving
  var offset = 0; // start at the beginning of the buffer
  
  // bind the ARRAY_BUFFER to attribute and set options
  context.vertexAttribPointer(normal_attribute_location, size, type, normalize, stride, offset);
  // bind the attribute/buffer set
  //context.bindVertexArray(vao);
}

