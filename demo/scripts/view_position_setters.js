function set_up_view_position(context, program, attribute_name, view_position){
	var view_position_location = context.getUniformLocation(program, attribute_name);
  	context.uniform3fv(view_position_location, view_position);
}