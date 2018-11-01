function set_up_light(context, program, attribute_name, light){
	var lightLocation = context.getUniformLocation(program, attribute_name);
  	context.uniform3fv(lightLocation, light);
}