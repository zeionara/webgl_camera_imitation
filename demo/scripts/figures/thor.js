var thor = {

    get_x_z: function(radius, y_current, step, x, y, z){
        lvertices = [];

        fixed = radius * radius - y_current * y_current;

        console.log(radius);
        console.log(y_current);

        console.log('fixed : ', fixed);

        for (ix = Math.sqrt(fixed); ix >= -Math.sqrt(fixed); ix -= step){
            lvertices.push(x + ix, y_current, z - Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        for (ix = -Math.sqrt(fixed); ix <= Math.sqrt(fixed); ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            lvertices.push(x + ix, y_current, z + Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        return lvertices;
    },

    get_x_z_opp: function(radius, y_current, step, x, y, z){
        lvertices = [];

        fixed = radius * radius - y_current * y_current;

        console.log(radius);
        console.log(y_current);

        console.log('fixed : ', fixed);

        for (ix = -Math.sqrt(fixed); ix <= Math.sqrt(fixed); ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            lvertices.push(x + ix, y_current, z + Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        for (ix = Math.sqrt(fixed); ix >= -Math.sqrt(fixed); ix -= step){
            lvertices.push(x + ix, y_current, z - Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        return lvertices;
    },

    extend_vertices_set(more_upper_vertices, upper_vertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z){
        for (i = 0; i <= more_upper_vertices.length; i += 3){

                let new_vertex_index = i / 3;
                let old_vertex_index = Math.floor((i / more_upper_vertices.length) * upper_vertices.length / 3);

                vertices_to_return.push(
                    x + more_upper_vertices[new_vertex_index * 3 + 0], 
                    y + more_upper_vertices[new_vertex_index * 3 + 1], 
                    z + more_upper_vertices[new_vertex_index * 3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[new_vertex_index * 3 + 0], 
                    y + more_upper_vertices[new_vertex_index * 3 + 1], 
                    z + more_upper_vertices[new_vertex_index * 3 + 2]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                
                

                

                
                
                
                

                ///

                
                vertices_to_return.push(
                    x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length], 
                    y + upper_vertices[((old_vertex_index+ 1) * 3 + 1) % upper_vertices.length], 
                    z + upper_vertices[((old_vertex_index + 1) *3 + 2) % upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length], 
                    y + upper_vertices[((old_vertex_index+ 1) * 3 + 1) % upper_vertices.length], 
                    z + upper_vertices[((old_vertex_index + 1) *3 + 2) % upper_vertices.length]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                
                
                

                //console.log(isNaN(x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length]));


                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[old_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
            }
    },

    connect_circles: function(lvertices, vertices_to_returns, big_radius, small_radius, angle1, angle2, step){
        //lvertices = [];
        //vertices_to_returns = [];

        var local_radius = big_radius + small_radius * Math.cos(angle1);
        var y_new = small_radius * Math.sin(angle1);

        for (ix = local_radius; ix >= -local_radius; ix -= step){
            lvertices.push(ix, y_new, - Math.sqrt(Math.abs(local_radius * local_radius - ix * ix)));
        }

        for (ix = -local_radius; ix <= local_radius; ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            lvertices.push( ix, y_new,  Math.sqrt(Math.abs(local_radius * local_radius - ix * ix)));
        }

        local_radius = big_radius + small_radius * Math.cos(angle2);
        y_new = small_radius * Math.sin(angle2);
            

        for (ix = local_radius; ix >= -local_radius; ix -= step){
            vertices_to_returns.push(ix, y_new, - Math.sqrt(Math.abs(local_radius * local_radius - ix * ix)));
        }

        for (ix = -local_radius; ix <= local_radius; ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            vertices_to_returns.push( ix, y_new,  Math.sqrt(Math.abs(local_radius * local_radius - ix * ix)));
        }
    },

	get_thor: function(big_radius, small_radius, x, y, z, precision){

        /*for(angle = 0; angle < 2 * Math.PI; angle += precision){
            //console.log('x : ', big_radius * Math.cos(angle));
            //console.log('z : ', big_radius * Math.sin(angle));
            //console.log(' y : ', 0);

            console.log(`(x * ${Math.cos(angle)}) ^ 2 + (z * ${Math.sin(angle)}) ^ 2 + y ^ 2 = ${small_radius * small_radius}`);
        }*/

        vertices_to_return = [];
        colors_to_return = [];
        normals_to_return = [];

        for (angle = 0; angle <= Math.PI; angle += precision){
            lvertices = [];
            vertices_to_returns = [];
            this.connect_circles(lvertices, vertices_to_returns, big_radius, small_radius, angle, angle + precision, precision);
            this.extend_vertices_set(lvertices, vertices_to_returns, vertices_to_return, colors_to_return, normals_to_return, x, y, z);
        }

        for (angle = Math.PI; angle <= 2 * Math.PI; angle += precision){
            lvertices = [];
            vertices_to_returns = [];
            this.connect_circles(lvertices, vertices_to_returns, big_radius, small_radius, angle, angle + precision, precision);
            this.extend_vertices_set(vertices_to_returns, lvertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z);
        }

        /*for (angle = Math.PI/2; angle <= 3*Math.PI; angle += Math.PI/24){
            lvertices = [];
            vertices_to_returns = [];
            this.connect_circles(lvertices, vertices_to_returns, big_radius, small_radius, angle, angle + Math.PI/12, 1);
            this.extend_vertices_set(lvertices, vertices_to_returns, vertices_to_return, colors_to_return, normals_to_return, x, y, z);
        }*/

        

        

        return {geometry: vertices_to_return, colors: colors_to_return, normals: normals_to_return};
        
        return [
            0, 0, 0,
            100, 0, 0,
            0, 100, 0,
        ]
    }
}