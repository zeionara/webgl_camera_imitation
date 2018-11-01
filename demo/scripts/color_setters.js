function set_up_color(context, program, attribute_name, color){
	var colorLocation = context.getUniformLocation(program, attribute_name);
  context.uniform4fv(colorLocation, color);
}

function set_colors(context, colors){
  context.bufferData(context.ARRAY_BUFFER, new Uint8Array(colors), context.STATIC_DRAW);
}

function set_up_colors(context, program, attribute_name, colors){
  var color_attribute_location = context.getAttribLocation(program, attribute_name);
  
  // create buffer containing coordinates of points
  var color_buffer = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, color_buffer);
  set_colors(context, colors);

  // create vertex array and bind it to attribute
  //var vao = context.createVertexArray();
  //context.bindVertexArray(vao);
  context.enableVertexAttribArray(color_attribute_location);
    
  var size = COLOR_DIMENSION; // values per iteration
  var type = context.UNSIGNED_BYTE; // the values are 32-bit float numbers
  var normalize = true; // don't normalize the data
  var stride = 0; // don't skip values while moving
  var offset = 0; // start at the beginning of the buffer
  
  // bind the ARRAY_BUFFER to attribute and set options
  context.vertexAttribPointer(color_attribute_location, size, type, normalize, stride, offset);
  // bind the attribute/buffer set
  //context.bindVertexArray(vao);
}

