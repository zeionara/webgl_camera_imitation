var m4 = {
    
    set_fudge_factor: function (fudge_factor){
        return [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  fudge_factor,
            0,  0,  0,  1,
        ]
    },

    translation: function (tx, ty, tz){
        return [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            tx, ty, tz, 1
        ]
    },

    x_rotation: function (angle_in_radians){
        var c = Math.cos(angle_in_radians);
        var s = Math.sin(angle_in_radians);

        return [
            1,  0,  0,  0,
            0,  c,  s,  0,
            0, -s,  c,  0,
            0,  0,  0,  1
        ]
    },

    y_rotation: function (angle_in_radians){
        var c = Math.cos(angle_in_radians);
        var s = Math.sin(angle_in_radians);

        return [
            c,  0, -s,  0,
            0,  1,  0,  0,
            s,  0,  c,  0,
            0,  0,  0,  1
        ]
    },

    z_rotation: function (angle_in_radians){
        var c = Math.cos(angle_in_radians);
        var s = Math.sin(angle_in_radians);

        return [
            c,  s,  0,  0,
            -s, c,  0,  0,
            0,  0,  1,  0,
            0,  0,  0,  1
        ]
    },

    scaling: function (sx, sy, sz){
        return [
            sx, 0,  0,  0,
            0,  sy, 0,  0,
            0,  0,  sz, 0,
            0,  0,  0,  1
        ]
    },

    projection: function (width, height, depth){
        return [
            2/width, 0,  0,  0,
            0,  -2/height, 0,  0,
            0,  0,  2/depth, 0,
            -1,  1,  0,  1,
        ]
    },

    orthographic: function(left, right, bottom, top, near, far) {
        return [
            2 / (right - left), 0, 0, 0,
            0, 2 / (top - bottom), 0, 0,
            0, 0, 2 / (near - far), 0,
 
            (left + right) / (left - right),
            (bottom + top) / (bottom - top),
            (near + far) / (near - far),
            1,
        ];
    },

    perspective: function(fieldOfViewInRadians, aspect, near, far) {
        var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        var rangeInv = 1.0 / (near - far);
 
        return [
            f/aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0
        ];
    },

    multiply: function(a, b) {
	    var a00 = a[0 * 4 + 0];
	    var a01 = a[0 * 4 + 1];
	    var a02 = a[0 * 4 + 2];
	    var a03 = a[0 * 4 + 3];
	    var a10 = a[1 * 4 + 0];
	    var a11 = a[1 * 4 + 1];
	    var a12 = a[1 * 4 + 2];
	    var a13 = a[1 * 4 + 3];
	    var a20 = a[2 * 4 + 0];
	    var a21 = a[2 * 4 + 1];
	    var a22 = a[2 * 4 + 2];
	    var a23 = a[2 * 4 + 3];
	    var a30 = a[3 * 4 + 0];
	    var a31 = a[3 * 4 + 1];
	    var a32 = a[3 * 4 + 2];
	    var a33 = a[3 * 4 + 3];
	    var b00 = b[0 * 4 + 0];
	    var b01 = b[0 * 4 + 1];
	    var b02 = b[0 * 4 + 2];
	    var b03 = b[0 * 4 + 3];
	    var b10 = b[1 * 4 + 0];
	    var b11 = b[1 * 4 + 1];
	    var b12 = b[1 * 4 + 2];
	    var b13 = b[1 * 4 + 3];
	    var b20 = b[2 * 4 + 0];
	    var b21 = b[2 * 4 + 1];
	    var b22 = b[2 * 4 + 2];
	    var b23 = b[2 * 4 + 3];
	    var b30 = b[3 * 4 + 0];
	    var b31 = b[3 * 4 + 1];
	    var b32 = b[3 * 4 + 2];
	    var b33 = b[3 * 4 + 3];
	    return [
	      b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
	      b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
	      b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
	      b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
	      b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
	      b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
	      b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
	      b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
	      b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
	      b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
	      b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
	      b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
	      b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
	      b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
	      b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
	      b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
	    ];
	},

    // apply matrices

    translate: function(m, tx, ty, tz){
        return m4.multiply(m, m4.translation(tx, ty, tz));
    },

    x_rotate: function(m, angle_in_radians){
        return m4.multiply(m, m4.x_rotation(angle_in_radians));
    },

    y_rotate: function(m, angle_in_radians){
        return m4.multiply(m, m4.y_rotation(angle_in_radians));
    },

    z_rotate: function(m, angle_in_radians){
        return m4.multiply(m, m4.z_rotation(angle_in_radians));
    },

    scale: function(m, sx, sy, sz){
        return m4.multiply(m, m4.scaling(sx, sy, sz));
    },

    transpose: function(m) {
        return [
          m[0], m[4], m[8], m[12],
          m[1], m[5], m[9], m[13],
          m[2], m[6], m[10], m[14],
          m[3], m[7], m[11], m[15],
        ];
    },

    inverse: function(m) {
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0  = m22 * m33;
    var tmp_1  = m32 * m23;
    var tmp_2  = m12 * m33;
    var tmp_3  = m32 * m13;
    var tmp_4  = m12 * m23;
    var tmp_5  = m22 * m13;
    var tmp_6  = m02 * m33;
    var tmp_7  = m32 * m03;
    var tmp_8  = m02 * m23;
    var tmp_9  = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;

    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
             (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
             (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
             (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
             (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

    return [
      d * t0,
      d * t1,
      d * t2,
      d * t3,
      d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
           (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
      d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
           (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
      d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
           (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
      d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
           (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
      d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
           (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
      d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
           (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
      d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
           (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
      d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
           (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
      d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
           (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
      d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
           (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
      d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
           (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
      d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
           (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02)),
    ];
  },

  lookAt: function(cameraPosition, target, up) {
    var zAxis = vector.normalize(vector.subtractVectors(cameraPosition, target));
    var xAxis = vector.cross(up, zAxis);
    var yAxis = vector.cross(zAxis, xAxis);
 
    return [
      xAxis[0], xAxis[1], xAxis[2], 0,
      yAxis[0], yAxis[1], yAxis[2], 0,
      zAxis[0], zAxis[1], zAxis[2], 0,
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      1,
    ];
  },
}

var zNear = 1;
var zFar = 2000;
var fPosition = [0,0,0];

function set_up_transform_matrix_in_perspective(context, program, world_view_attribute_name, world_attribute_name, world_an, depth, translation, rotation, scale){
    var world_view_projection_matrix_location = context.getUniformLocation(program, world_view_attribute_name);
    var world_matrix_location = context.getUniformLocation(program, world_attribute_name);
    var world_an_matrix_loc = context.getUniformLocation(program, world_an);

    set_up_view_position(context, program, 'u_view_world_position', [camera_translation_x, camera_translation_y, camera_translation_z]);

    var aspect = context.canvas.clientWidth / context.canvas.clientHeight;
    var move_origin_matrix = m4.translation(-150, -150, 50);

    var projection_matrix;

    if (camera_angle_x_radians_speed > 0){
        camera_angle_x_radians += camera_angle_x_radians_speed / 1000;
    }

    if (camera_angle_y_radians_speed > 0){
        camera_angle_y_radians += camera_angle_y_radians_speed / 1000;
    }

    if (camera_angle_z_radians_speed > 0){
        camera_angle_z_radians += camera_angle_z_radians_speed / 1000;
    }

    if (should_enable_perspective()){
        projection_matrix = m4.perspective(fieldOfViewRadians, aspect, zNear, zFar)
    } else {
        projection_matrix = m4.orthographic(-context.canvas.clientWidth/2, context.canvas.clientWidth/2, -context.canvas.clientHeight/2, context.canvas.clientHeight/2, zNear, zFar);
    }

    var camera_matrix = m4.translation(camera_translation_x, camera_translation_y, camera_translation_z);
    camera_matrix = m4.y_rotate(camera_matrix, camera_angle_y_radians);
    camera_matrix = m4.z_rotate(camera_matrix, camera_angle_z_radians);
    camera_matrix = m4.x_rotate(camera_matrix, camera_angle_x_radians);

    var cameraPosition = [
        camera_matrix[12],
        camera_matrix[13],
        camera_matrix[14],
    ];
 
    var up = [0, 1, 0];
    
    if (should_enable_target()){
        camera_matrix = m4.lookAt(cameraPosition, fPosition, up);
    }

    var world_matrix = camera_matrix;

    var view_matrix = m4.inverse(camera_matrix);

    var matrix = m4.multiply(projection_matrix, view_matrix);

    matrix = m4.translate(matrix, translation[0], translation[1], translation[2]);
    matrix = m4.x_rotate(matrix, rotation[0]);
    matrix = m4.y_rotate(matrix, rotation[1]);
    matrix = m4.z_rotate(matrix, rotation[2]);

    matrix = m4.scale(matrix, scale[0], scale[1], scale[2]);
    matrix = m4.multiply(matrix, move_origin_matrix);
    

    world_matrix = m4.x_rotate(world_matrix, rotation[0]);
    world_matrix = m4.y_rotate(world_matrix, rotation[1]);
    world_matrix = m4.z_rotate(world_matrix, rotation[2]);

    console.log(world_matrix);

 
    // Set the matrix.
    context.uniformMatrix4fv(world_view_projection_matrix_location, false, matrix);
    context.uniformMatrix4fv(world_an_matrix_loc, false, world_matrix);
    context.uniformMatrix4fv(world_matrix_location, false, m4.transpose(m4.inverse(world_matrix)));
}