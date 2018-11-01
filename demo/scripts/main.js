const CANVAS_ID = 'cv';
const DIMENSION = 3;
const COLOR_DIMENSION = 3;

var gl_context = null;
var gl_program = null;
var geometry = null;

var fieldOfViewRadians = degToRad(60);

var animation_interval;

vertex_shader_source = `#version 300 es

mat4 u_world;
uniform vec3 u_light_world_position;
out vec3 v_surface_to_light;
out vec3 v_surface_to_view;

uniform vec3 u_view_world_position;

in vec4 a_position;
in vec4 a_color;

in vec3 a_normal;

uniform mat4 u_world_view_projection;
uniform mat4 u_world_inverse_transpose;

out vec4 v_color;
out vec3 v_normal;



void main(){
    gl_Position = u_world_view_projection * a_position;

    vec3 surface_world_position = (u_world * a_position).xyz;
    v_surface_to_light = u_light_world_position - surface_world_position;
    v_surface_to_view = u_view_world_position - surface_world_position;

    v_color = a_color;
    v_normal = mat3(u_world_inverse_transpose) * a_normal;
}
`;

fragment_shader_source = `#version 300 es
    
    precision mediump float;

    in vec3 v_surface_to_light;
    in vec3 v_surface_to_view;

    out vec4 outColor;

    in vec4 v_color;
    in vec3 v_normal;

    uniform vec3 u_reverse_light_direction;

    uniform vec4 u_color;

    void main(){
        float shineness = 100.0;

        vec3 normal = normalize(v_normal);
        vec3 surface_to_light = normalize(v_surface_to_light);
        vec3 surface_to_view = normalize(v_surface_to_view);
        vec3 half_vector = normalize(surface_to_light + surface_to_view);

        float light = dot(normal, surface_to_light);
        float specular = 0.0;
        if (light > 0.0){
          specular = pow(dot(normal, half_vector), shineness);
        }

        outColor = u_color;//vec4(0.13, 0.52, 0.82, 1);//vec4(0.7, 0.2, 0.2, 1);
        outColor.rgb *= light;
    }
`;


function set_up_fudge_factor(context, program, attribute_name, fudge_factor){
	var fudge_factor_location = context.getUniformLocation(program, attribute_name);
  context.uniform1f(fudge_factor_location, fudge_factor);
}

var translation = [0, 0, -600];
var rotation = [degToRad(0), degToRad(0), degToRad(0)];
var scale = [2, 2, 2];
var color = [Math.random(), Math.random(), Math.random(), 1];

var fieldOfViewDeg = 0;

var dzn = -0.05;
var animation_speed = 200;

function update_figure(){
  set_up_color(gl_context, gl_program, "u_color", [0.13, 0.52, 0.82, 1]);
	set_up_transform_matrix_in_perspective(gl_context, gl_program, "u_world_view_projection", "u_world_inverse_transpose", "u_world", 400, translation, rotation, scale);
  gl_context.drawArrays(gl_context.TRIANGLES, 0, Math.floor(geometry.length / DIMENSION));

  translation[0] += 200 * scale[0];

  var tmp = rotation[1];
  rotation[1] = rotation[0];
  rotation[0] = tmp;

  set_up_color(gl_context, gl_program, "u_color", [0.7, 0.2, 0.2, 1]);
  set_up_transform_matrix_in_perspective(gl_context, gl_program, "u_world_view_projection", "u_world_inverse_transpose", "u_world", 400, translation, rotation, scale);
  gl_context.drawArrays(gl_context.TRIANGLES, 0, Math.floor(geometry.length / DIMENSION));

  translation[0] -= 200 * scale[0];

  tmp = rotation[0];
  rotation[0] = rotation[1];
  rotation[1] = tmp;

  translation[0] -= 200 * scale[0];

  tmp = rotation[1];
  rotation[1] = rotation[2];
  rotation[2] = tmp;

  set_up_color(gl_context, gl_program, "u_color", [0.18, 0.71, 0.42, 1]);
  set_up_transform_matrix_in_perspective(gl_context, gl_program, "u_world_view_projection", "u_world_inverse_transpose", "u_world", 400, translation, rotation, scale);
  gl_context.drawArrays(gl_context.TRIANGLES, 0, Math.floor(geometry.length / DIMENSION));

  translation[0] += 200 * scale[0];

  tmp = rotation[2];
  rotation[2] = rotation[1];
  rotation[1] = tmp;
}

function update_scale(e){

  e.preventDefault();

	scale[0] -= 3 / e.deltaY * scale[0];
	scale[1] -= 3 / e.deltaY * scale[1];
	scale[2] -= 3 / e.deltaY * scale[2];

	if ((scale[0] >= 0) && (scale[1] >= 0) && (scale[2] >= 0)){
		update_figure();
	} else {
		scale[0] = 0;
		scale[1] = 0;
		scale[2] = 0;
	}
}

function update_rotation(){
	rotation[1] += 0.005;
	if (rotation[1] >= 2 * Math.PI){
		rotation[1] -= 2 * Math.PI;
	}
	update_figure();
}



function main(window, document){
    set_near(zNear);
    set_far(zFar);
    set_fov(radToDeg(fieldOfViewRadians));

    set_xcam(camera_translation_x);
    set_ycam(camera_translation_y);
    set_zcam(camera_translation_z);

    set_xcamangle(camera_angle_x_radians);
    set_ycamangle(camera_angle_y_radians);
    set_zcamangle(camera_angle_z_radians);

    console.log(fPosition);

    set_xtarget(fPosition[0]);
    set_ytarget(fPosition[1]);
    set_ztarget(fPosition[2]);

    set_xspeed(camera_angle_x_radians_speed);
    set_yspeed(camera_angle_y_radians_speed);
    set_zspeed(camera_angle_z_radians_speed);

    set_animation_speed(animation_speed);

    geometry = cube.geometry;//ms.geometry;//cube.geometry;

		var colors = cube.colors;
    var normals = cube.normals;

    $('#cv').attr('width', (window.innerWidth - 40) + 'px');
    $('#cv').attr('height', (window.innerHeight - 100) + 'px');

    var canvas = document.getElementById(CANVAS_ID);
    var canvas_2d_context = canvas.getContext('webgl2');

    canvas.addEventListener("wheel", update_scale);

    if (!canvas_2d_context){
        console.log('No 2d context in canvas!');
    }

    var program = construct_program(canvas_2d_context, vertex_shader_source, fragment_shader_source);
    set_up_geometry(canvas_2d_context, program, 'a_position', geometry);
    configure_canvas(canvas_2d_context);

    set_up_program(canvas_2d_context, program);
  	set_up_colors(canvas_2d_context, program, 'a_color', colors);
    set_up_color(canvas_2d_context, program, "u_color", [0.13, 0.52, 0.82, 1]);
    set_up_normals(canvas_2d_context, program, 'a_normal', normals);
    set_up_light(canvas_2d_context, program, "u_light_world_position", [50, 0, 100])

  	gl_context = canvas_2d_context;
  	gl_program = program;

    update_figure();

    animation_interval = setInterval(update_rotation, 1000 / animation_speed);
}