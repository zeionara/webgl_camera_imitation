function set_geometry_static_draw(context, geometry){
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(geometry), context.STATIC_DRAW);
}

function set_up_geometry(context, program, attribute_name, geometry){
  var position_attribute_location = context.getAttribLocation(program, attribute_name);
  
  // create buffer containing coordinates of points
  var position_buffer = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, position_buffer);
  set_geometry_static_draw(context, geometry);

  // create vertex array and bind it to attribute
  var vao = context.createVertexArray();
  context.bindVertexArray(vao);
  context.enableVertexAttribArray(position_attribute_location);
    
  var size = DIMENSION; // values per iteration
  var type = context.FLOAT; // the values are 32-bit float numbers
  var normalize = false; // don't normalize the data
  var stride = 0; // don't skip values while moving
  var offset = 0; // start at the beginning of the buffer
  
  // bind the ARRAY_BUFFER to attribute and set options
  context.vertexAttribPointer(position_attribute_location, size, type, normalize, stride, offset);
  // bind the attribute/buffer set
  context.bindVertexArray(vao);
}