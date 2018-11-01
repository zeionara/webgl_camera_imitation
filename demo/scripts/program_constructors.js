function create_shader(context, type, source){
    // create empty shader
    var shader = context.createShader(type);
    // fill it with code
    context.shaderSource(shader, source);
    // compile code
    context.compileShader(shader);
    // check the state of operation
    var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
    if (success){
        return shader;
    }
    // if failed
    console.log(context.getShaderInfoLog(shader));
    // cleanup
    context.deleteShader(shader);
}

function create_program(context, vertex_shader, fragment_shader){
    // create empty program
    var program = context.createProgram();
    // attach shaders
    context.attachShader(program, vertex_shader);
    context.attachShader(program, fragment_shader);
    // link
    context.linkProgram(program);
    // check the state of operation
    var success = context.getProgramParameter(program, context.LINK_STATUS);
    if (success){
        return program;
    }
    // if failed
    console.log(context.getProgramInfoLog(program));
    // cleanup
    context.deleteProgram(program);
}

function construct_program(context, vertex_shader_source, fragment_shader_source){
    var vertex_shader = create_shader(context, context.VERTEX_SHADER, vertex_shader_source);
    var fragment_shader = create_shader(context, context.FRAGMENT_SHADER, fragment_shader_source);

    return create_program(context, vertex_shader, fragment_shader);
}

function set_up_program(context, program){
    context.useProgram(program);
}