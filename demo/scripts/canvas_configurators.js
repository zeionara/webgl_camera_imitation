function configure_canvas(context){
	webglUtils.resizeCanvasToDisplaySize(context.canvas);
    context.viewport(0, 0, context.canvas.width, context.canvas.height);
    context.clearColor(0, 0, 0, 0);
    context.enable(context.CULL_FACE);
    context.enable(context.DEPTH_TEST);
    context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
}